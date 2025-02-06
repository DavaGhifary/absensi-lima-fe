import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const AwalScreen = ({ navigation }: any) => {
  const handleDaftar = () => {
    navigation.navigate("Daftar");
  };

  return (
    <View className="bg-primary h-screen">
      <View className="flex-1 justify-end mb-48 px-14">
        <Text className="text-white text-3xl font-bold mb-2">
          Selamat Datang
        </Text>
        <Text className="text-white text-md">Masuk untuk mengelola</Text>
        <Text className="text-white text-md font-bold">
          Absensi dengan mudah & cepat
        </Text>
        /
        <TouchableOpacity className="bg-white flex-row border border-white rounded-md py-3 items-center justify-center mt-4">
          <Image
            source={require("../assets/image/google 1.png")}
            className="w-6 h-6 mr-4"
          />
          <Text className="text-primary font-bold text-md">
            Masuk Menggunakan Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primary border border-white rounded-md py-3 items-center mt-4"
          onPress={handleDaftar}
        >
          <Text className="text-white font-bold text-md">Buat Akun</Text>
        </TouchableOpacity>
        <View className="items-center mt-4">
          <Text className="text-white">
            Sudah memiliki akun?
            <Text className="font-bold"> Masuk Sekarang</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AwalScreen;
