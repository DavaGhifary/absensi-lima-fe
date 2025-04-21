import {
  ChevronDown,
  ChevronLeft,
  Upload,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { ajukanIzinSakit } from "../../services/api";

const options = [
  { label: "Sakit", value: "Sakit" },
  { label: "Izin", value: "Izin" },
];

const AjukanSakitIzin = ({ navigation }: any) => {
  const [selectedValue, setSelectedValue] = useState<"Sakit" | "Izin" | "">('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [keterangan, setKeterangan] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [isKeteranganValid, setIsKeteranganValid] = useState(true);
  const [isFileValid, setIsFileValid] = useState(true);

  // Dapatkan lokasi saat komponen pertama kali dimuat
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Izin lokasi ditolak', 'Aplikasi membutuhkan akses lokasi untuk mengajukan izin/sakit.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      setFileUri(asset.uri);
      setFileName(asset.uri.split("/").pop() || "gambar.jpg");
    }
  };

  const handleKirim = async () => {
    let valid = true;

    // Validasi Keterangan
    if (!keterangan) {
      setIsKeteranganValid(false);
      valid = false;
    }

    // Validasi File (Hanya untuk "Sakit")
    if (selectedValue === "Sakit" && !fileUri) {
      setIsFileValid(false);
      valid = false;
    }

    if (!selectedValue) {
      alert("Silakan pilih jenis pengajuan terlebih dahulu.");
      return;
    }

    if (!valid) {
      return;
    }

    setLoading(true);
    try {
      await ajukanIzinSakit({
        jenis: selectedValue,
        keterangan,
        surat_sakit: fileUri || undefined,
        latitude,
        longitude,
      });

      setLoading(false);
      navigation.navigate("ResultAjukan");
    } catch (error: any) {
      setLoading(false);

      const errorMessage =
        error?.response?.data?.message ||
        "Terjadi kesalahan saat mengirim pengajuan.";

      navigation.navigate("ResultAbsenError", { message: errorMessage });
    }
  }

  return (
    <View className="flex-1 bg-primary">
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <ChevronLeft
            className="text-white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">
            Ajukan Izin / Sakit
          </Text>
          <Text className="w-6" />
        </View>
      </View>

      <View className="flex-1 bg-white rounded-t-2xl px-14">
        {/* Dropdown Jenis Pengajuan */}
        <View className="mb-2 mt-10">
          <Text className="text-md font-semibold mb-2">Jenis Pengajuan</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="flex-row items-center justify-between border border-gray-300 rounded-lg bg-white px-4 py-3"
          >
            <Text className="text-base text-gray-400">
              {options.find((opt) => opt.value === selectedValue)?.label ||
                "Pilih jenis pengajuan"}
            </Text>
            <ChevronDown className="text-gray-300" />
          </TouchableOpacity>

          <Modal visible={modalVisible} transparent animationType="fade">
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View className="flex-1 justify-center items-center bg-black/50">
                <TouchableWithoutFeedback>
                  <View className="bg-white rounded-lg p-4 w-3/4">
                    <FlatList
                      data={options}
                      keyExtractor={(item) => item.value}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          className="py-2"
                          onPress={() => {
                            setSelectedValue(item.value as "Sakit" | "Izin");
                            setModalVisible(false);
                          }}
                        >
                          <Text className="text-base text-black">
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>

        {/* Keterangan */}
        {selectedValue !== "" && (
          <View className="w-full mb-2">
            <Text className="font-semibold text-black mb-1">Keterangan</Text>
            <TextInput
              placeholder="Masukkan keterangan..."
              multiline
              numberOfLines={4}
              value={keterangan}
              onChangeText={setKeterangan}
              className={`border ${isKeteranganValid ? 'border-gray-300' : 'border-red-500'} rounded-md px-3 pb-8 text-gray-400 text-base`}
            />
            {!isKeteranganValid && (
              <Text className="text-red-500 text-sm mt-1">*Keterangan harus diisi</Text>
            )}
          </View>
        )}

        {/* Bukti hanya untuk Sakit */}
        {selectedValue === "Sakit" && (
          <View className="w-full mb-2">
            <Text className="font-semibold text-black mb-1">Unggah bukti</Text>
            <View className="relative">
              <TextInput
                value={fileName || ""}
                editable={false}
                className={`h-12 border ${isFileValid ? 'border-gray-300' : 'border-red-500'} rounded-md pl-12 py-3 text-black`}
              />
              <Upload
                onPress={pickImage}
                className="text-gray-400 absolute top-3 left-4"
              />
            </View>
            {!isFileValid && (
              <Text className="text-red-500 text-sm mt-1">*Bukti surat sakit harus diunggah</Text>
            )}
          </View>
        )}

        {/* Tombol Kirim */}
        <TouchableOpacity
          onPress={handleKirim}
          className="bg-primary rounded-lg p-4 mt-5 flex-row items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-center text-white">Kirim</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AjukanSakitIzin;
