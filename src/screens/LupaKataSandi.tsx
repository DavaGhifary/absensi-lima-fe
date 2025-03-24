import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeOff, ChevronLeft } from "lucide-react-native";

const LupaKataSandi = ({ navigation }: any) => {

  const handleDaftar = () => {
    navigation.navigate("Daftar");
  };

  return (
    <View className="flex-1 bg-primary">
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <ChevronLeft
            className="text-white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">Lupa Kata Sandi</Text>
          <Text className="w-6" />
        </View>
      </View>
      <View className="flex-1 bg-white rounded-t-2xl px-14">
        {/* Header */}
        <View className="mt-6">
          <Text className="text-2xl font-bold">Verfikasi Email</Text>
          <Text className="text-gray-500 text-xs">Masukkan alamat email Anda,  untuk mengatur ulang kata sandi Anda</Text>
        </View>

        {/* Form */}
        <View className="mt-8">

          {/* Input Email */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">Alamat Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              placeholderTextColor="#A0A0A0"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
            />
          </View>

          {/* Tombol Daftar */}
          <TouchableOpacity className="bg-primary rounded-md py-2 items-center mt-4">
            <Text className="text-white font-bold text-lg">Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LupaKataSandi;
