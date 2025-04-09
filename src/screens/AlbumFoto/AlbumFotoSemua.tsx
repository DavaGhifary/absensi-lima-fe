import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

const AlbumFotoSemua = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primary">
      {/* Header Biru */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <ChevronLeft
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">Album Foto</Text>
          <Text className="w-6" />
        </View>
      </View>

      {/* Konten Putih */}
      <View className="flex-1 bg-white rounded-t-2xl px-6 pt-6">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Judul Hari ini */}
          <Text className="text-base font-semibold mb-4">Hari ini</Text>

          {/* Card Foto */}
          <TouchableOpacity className="bg-gray-100 rounded-xl overflow-hidden" onPress={() => navigation.navigate("AlbumDetail")}>
            <Image
              source={require('../../assets/image/image 73.png')} // Ganti dengan gambar asli
              className="w-full h-28"
              resizeMode="cover"
            />
            <View className="p-3">
              <Text className="font-semibold text-sm mb-1">
                Dokumentasi Kegiatan SMARTTREN
              </Text>
              <Text className="text-xs text-gray-500">
                Kegiatan SMARTTREN Pada 22 Maret 2025
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AlbumFotoSemua;
