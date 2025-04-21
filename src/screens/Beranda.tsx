import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Bell,
  Calendar,
  CircleHelp,
  ClipboardCheck,
  ClipboardList,
  Home,
  MailOpen,
  Megaphone,
  Phone,
  SquarePen,
  User,
} from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Beranda = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");

useEffect(() => {
  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        setUserName(user.userName || "Pengguna");
      }
    } catch (error) {
      console.error("Gagal ambil data user:", error);
    }
  };

  getUser();
}, []);


  return (
    <View className="flex-1 bg-[#F9FAFC]">
      <ScrollView className="p-6 mt-8" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-bold">Hallo,</Text>
            <Text className="text-2xl font-bold">{userName}</Text>
          </View>
          <TouchableOpacity>
            <Bell className="text-black" size={24} />
          </TouchableOpacity>
        </View>

        {/* Reminder Box */}
        <View className="bg-blue-600 w-full p-4 rounded-lg mt-4">
          <Text className="text-white font-bold">Jangan Lupa Untuk Absen!</Text>
          <View className="w-80">
            <Text className="text-white text-sm mt-2 w-[200px]">
              Masa depanmu bergantung pada kebiasaan baik yang kamu mulai hari
              ini.
            </Text>
          </View>
        </View>

        {/* Features */}
        <Text className="text-lg font-bold mt-6">Fitur</Text>
        <View className="flex flex-row flex-wrap justify-between gap-2 mt-1">
          <TouchableOpacity
            onPress={() => navigation.navigate("Absen")}
            className="items-center"
          >
            <View className="bg-[#FFD3D1] p-3 rounded-lg shadow-md">
              <ClipboardCheck className="text-[#EC615A]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Absen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RiwayatAbsen")}
            className="items-center"
          >
            <View className="bg-[#FFE4CA] p-3 rounded-lg shadow-md">
              <ClipboardList className="text-[#FEB268]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Riwayat Absen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ajukan")}
            className="items-center"
          >
            <View className="bg-[#CCF4DD] p-3 rounded-lg shadow-md">
              <MailOpen className="text-[#69E09C]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">
              Ajukan Izin/Sakit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("JadwalSemua")}
            className="items-center"
          >
            <View className="bg-[#CACCFF] p-3 rounded-lg shadow-md">
              <Calendar className="text-[#7175F2]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Jadwal Mapel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("KontakGuru")} className="items-center">
            <View className="bg-[#FFE4CA] p-3 rounded-lg shadow-md">
              <Phone className="text-[#FEB268]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Kontak Guru</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pengumuman")} className="items-center">
            <View className="bg-[#CCF4DD] p-3 rounded-lg shadow-md">
              <Megaphone className="text-[#69E09C]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Pengumuman</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AlbumFotoSemua")}
            className="items-center"
          >
            <View className="bg-[#CACCFF] p-3 rounded-lg shadow-md">
              <FontAwesomeIcon icon={faImage} color="#7175F2" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Album Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("BarangHilang")} className="items-center">
            <View className="bg-[#FFD3D1] p-3 rounded-lg shadow-md">
              <CircleHelp className="text-[#EC615A]" size={32} />
            </View>
            <Text className="mt-2 text-sm text-center w-16">Barang Hilang</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Schedule */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold">Jadwal Hari ini</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">Lihat Selengkapnya</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-blue-600 p-4 rounded-lg mt-2">
            <View className="flex-row justify-between">
            <Text className="text-white">Rabu, 24 Januari 2025</Text>
            <Text className="text-white">08:05 WIB</Text>
            </View>
            <Text className="text-white font-bold text-xl">
              Matematika - RC 2.5
            </Text>
            <Text className="text-white">08:00 - 09:20</Text>
          </View>
        </View>

        {/* Announcements */}
        <View className="mt-6 mb-24">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold">Pengumuman</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <View className="p-4 border border-gray-300 rounded-lg mt-2">
            <View className="border-l-2 border-green-400 pl-2">
              <Text className="font-bold">Pengumuman pengumuman</Text>
              <Text className="text-gray-600 text-sm mt-1">
                Pengumuman pengumuman Pengumuman pengumuman...
              </Text>
            </View>
          </View>
          <View className="p-4 py-5 bg-white border border-gray-300 rounded-lg mt-2 items-center">
            <Text className="text-black font-bold text-center">
              Pengumuman kosong,
            </Text>
            <Text className="text-black font-bold text-center">
              tapi harimu jangan sampai kosong.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Beranda;
