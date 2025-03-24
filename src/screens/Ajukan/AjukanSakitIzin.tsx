import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  Upload,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";

const options = [
  { label: "Sakit", value: "Sakit" },
  { label: "Izin", value: "Izin" },
];

const AjukanSakitIzin = ({ navigation }: any) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      // Ekstrak nama file dari URI
      const name = uri.split("/").pop(); // Ambil nama file dari URI
      setFileName(name || "gambar_tanpa_nama.jpg");
    }
  };

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    setIsDateSelected(true);
    hideDatePicker();
  };

  const handleKirim = () => {
    navigation.navigate("ResultAjukan");
  };

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
            <Text
              className={`text-base ${
                selectedValue ? "text-gray-400" : "text-gray-400"
              }`}
            >
              {options.find((opt) => opt.value === selectedValue)?.label ||
                "Pilih jenis pengajuan"}
            </Text>
            <ChevronDown className="text-gray-300" />
          </TouchableOpacity>

          {/* Modal Pilihan */}
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
                            setSelectedValue(item.value);
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

        <View className="w-full mb-2">
          <Text className="font-semibold text-md text-black mb-1">Tanggal</Text>
          <TouchableOpacity
            onPress={showDatePicker}
            className="flex-row items-center justify-between border border-gray-300 rounded-md px-3 py-3"
          >
            <Text
              className={`text-base ${
                date ? "text-gray-400" : "text-gray-400"
              }`}
            >
              {isDateSelected ? date?.toDateString() : "Pilih Tanggal"}
            </Text>
            <Calendar className="text-gray-400" />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View className="w-full mb-2">
          <Text className="font-semibold text-black mb-1">Keterangan</Text>
          <TextInput
            placeholder="Masukkan keterangan..."
            multiline
            numberOfLines={4}
            className="border border-gray-300 rounded-md px-3 pb-8 text-gray-400 text-base"
          />
        </View>

        <View className="w-full mb-2">
          <Text className="font-semibold text-black mb-1">Unggah bukti</Text>

          {/* Input untuk menampilkan nama gambar */}
          <View className="relative">
            <TextInput
              value={fileName || ""}
              editable={false}
              className="h-12 border border-gray-300 rounded-md pl-12 py-3 text-black"
            />
            <Upload
              onPress={pickImage}
              className="text-gray-400 absolute top-3 left-4"
            />
          </View>
        </View>

        {/* Tombol Izinkan Lokasi */}
        <TouchableOpacity onPress={handleKirim} className="bg-primary rounded-lg p-4 mt-5">
          <Text className="text-center text-white">Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AjukanSakitIzin;
