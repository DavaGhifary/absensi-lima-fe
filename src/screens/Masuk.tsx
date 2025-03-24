import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Mail, Lock, Eye, EyeOff, ChevronLeft } from "lucide-react-native";

const LoginScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleDaftar = () => {
    navigation.navigate("Daftar");
  };
  const handleMasuk = () => {
    navigation.navigate("Beranda");
  };

  const handleLupaKataSandi = () => {
    navigation.navigate("LupaKataSandi");
  };

  return (
    <View className="flex-1 bg-primary">
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <ChevronLeft
            className="text-white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">Masuk</Text>
          <Text className="w-6" />
        </View>
      </View>
      <View className="flex-1 bg-white rounded-t-2xl px-14">
        {/* Header */}
        <View className="mt-6">
          <Text className="text-2xl font-bold">Masuk Sekarang!</Text>
          <Text className="text-gray-500">Masuk untuk mengakses fitur</Text>
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

          {/* Input Kata Sandi */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">Kata Sandi</Text>
            <View className="relative flex-row items-center">
              <TextInput
                className="flex-1 text-black bg-gray-100 rounded-md px-4 py-3"
                placeholder="Masukkan Kata Sandi"
                placeholderTextColor="#A0A0A0"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="ml-2 absolute right-3"
              >
                {showPassword ? (
                  <EyeOff className="text-gray-500 w-5 h-5" />
                ) : (
                  <Eye className="text-gray-500 w-5 h-5" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text className="text-right text-primary font-bold" onPress={handleLupaKataSandi}>Lupa Kata Sandi?</Text>
          </View>

          {/* Tombol Daftar */}
          <TouchableOpacity className="bg-primary rounded-md py-2 items-center mt-4" onPress={handleMasuk}>
            <Text className="text-white font-bold text-lg">Masuk</Text>
          </TouchableOpacity>

          <View className="items-center mt-2">
            <Text>Tidak memiliki akun? <Text className="text-primary font-bold" onPress={handleDaftar}>Daftar Sekarang</Text></Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
