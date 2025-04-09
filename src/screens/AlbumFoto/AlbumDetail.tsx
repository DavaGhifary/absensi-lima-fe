import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

const AlbumDetail = ({ navigation }: any) => {
  const handleOpenDrive = () => {
    Linking.openURL("https://drive.google.com"); // ganti dengan link asli
  };

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
        <View className="flex-row items-center space-x-2 mb-3">
          <Image source={require("../../assets/image/logosmk5.png")} />
          <Text className="text-sm font-medium">SMKN 5 BDG</Text>
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

        {/* Tombol Drive */}
        <TouchableOpacity
          className="flex-row items-center justify-start border border-gray-300 rounded-xl px-4 py-3 space-x-4"
          onPress={handleOpenDrive}
        >
          <FontAwesomeIcon icon={faGoogleDrive} size={24} />
          <Text className="text-sm font-medium text-black">
            Buka Album di Drive
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlbumDetail;
