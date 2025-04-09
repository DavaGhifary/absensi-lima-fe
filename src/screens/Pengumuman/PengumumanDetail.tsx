import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

const PengumumanDetail = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-white">
      {/* Gambar header */}
      <View className="relative">
        <Image
          source={require("../../assets/image/image 73.png")}
          className="w-full h-64"
          resizeMode="cover"
        />
        <TouchableOpacity
          className="absolute top-16 left-10"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft color="black" size={24} />
        </TouchableOpacity>
      </View>

      {/* Konten */}
      <View className="px-8 py-4 mt-6">
        <Text className="text-lg font-bold mb-6">
          Dokumentasi Kegiatan SMARTTREN
        </Text>

        {/* Lokasi */}
        <View className="flex-row items-center justify-between space-x-2 mb-3">
          <View className="flex-row items-center space-x-2">
            <Image source={require("../../assets/image/logosmk5.png")} />
            <Text className="text-sm font-medium">SMKN 5 BDG</Text>
          </View>
          <View>
            <Text className="text-gray-500">10 jam yang lalu</Text>
          </View>
        </View>

        {/* Deskripsi */}
        <Text className="text-sm text-gray-600 mb-16 leading-relaxed">
          SmartTren adalah program pesantren kilat yang diselenggarakan di Aula
          SMKN 5 untuk siswa kelas 10 dan 11. Kegiatan ini bertujuan
          meningkatkan pemahaman keagamaan melalui kajian, ibadah bersama, dan
          berbagai aktivitas Islami. Dengan suasana yang penuh kebersamaan,
          SmartTren menjadi momen refleksi dan pembelajaran spiritual bagi para
          peserta.
        </Text>
      </View>
    </View>
  );
};

export default PengumumanDetail;
