import { ChevronLeft } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../services/api";

const AbsenSend = ({ navigation }: any) => {
  const ImageAbsenSend = require("../../assets/image/image-AbsenSend.png");

  const [status, setStatus] = useState("hadir");
  const [keterlambatan, setKeterlambatan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    (async () => {
      let { status: locStatus } = await Location.requestForegroundPermissionsAsync();
      if (locStatus !== "granted") {
        Alert.alert("Izin lokasi ditolak");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      const now = new Date();
      const batas = new Date();
      batas.setHours(0, 0, 0);

      setStatus("hadir");
      setKeterlambatan(now > batas);
    })();
  }, []);

  const handleSubmit = async () => {
    if (!location) return Alert.alert("Lokasi belum tersedia!");
    setLoading(true);

    const token = await AsyncStorage.getItem("auth_token");

    const formData = new FormData();
    formData.append("latitude", String(location.latitude));
    formData.append("longitude", String(location.longitude));
    formData.append("status", status);

    try {
      const res = await api.post("/absensi/masuk", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      navigation.navigate("AbsenResult");
    } catch (error: any) {
      setLoading(false);

      const errorMessage =
        error?.response?.data?.message ||
        "Terjadi kesalahan saat mengirim pengajuan.";

      navigation.navigate("ResultAbsenError", { message: errorMessage });
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <View className="flex-row items-center justify-between px-14 pt-20">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Absen</Text>
        <View className="w-6" />
      </View>

      <View className="flex items-center justify-center mb-6 mt-6">
        <Image source={ImageAbsenSend} style={{ width: 300, height: 300 }} />
      </View>

      <View className="flex-1 bg-white rounded-t-3xl px-14 pt-6">
        <Text className="text-xl font-semibold mt-14 mb-2">Keterangan Absen</Text>
        <TextInput
          value={keterlambatan ? "Terlambat" : "Hadir"}
          editable={false}
          className="border border-gray-300 rounded-md p-3 mb-5 text-lg"
        />

        <TouchableOpacity
          className={`rounded-lg p-4 ${!location || loading ? "bg-gray-400" : "bg-primary"}`}
          onPress={handleSubmit}
          disabled={!location || loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-center text-white font-semibold">Kirim</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AbsenSend;
