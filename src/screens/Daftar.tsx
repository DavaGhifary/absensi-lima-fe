import { ChevronLeft, Eye, EyeOff, MoveLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import CheckboxDaftar from "../components/checbox/checboxDaftar";

const Daftar = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-primary">
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-16">
          <ChevronLeft
            className="text-white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">Daftar</Text>
          <Text className="w-6" />
        </View>
      </View>
      <View className="flex-1 bg-white rounded-t-2xl px-16">
        {/* Header */}
        <View className="mt-8">
          <Text className="text-2xl font-bold">Daftar Sekarang!</Text>
          <Text className="text-gray-500">Isikan detail info akun mu</Text>
        </View>

        {/* Form */}
        <View className="mt-8">
          {/* Input Nama */}
          <View className="mb-4">
            <Text className="text-gray-600 mb-1">Nama</Text>
            <TextInput
              placeholder="Masukkan Nama"
              placeholderTextColor="#A0A0A0"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
            />
          </View>

          {/* Input Email */}
          <View className="mb-4">
            <Text className="text-gray-600 mb-1">Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              placeholderTextColor="#A0A0A0"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
            />
          </View>

          {/* Input NISN */}
          <View className="mb-4">
            <Text className="text-gray-600 mb-1">NISN</Text>
            <TextInput
              placeholder="Masukkan NISN"
              placeholderTextColor="#A0A0A0"
              keyboardType="numeric"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
            />
          </View>

          {/* Input Kata Sandi */}
          <View className="mb-4">
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

          {/* Teks Syarat & Ketentuan */}
          <CheckboxDaftar
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />

          {/* Tombol Daftar */}
          <TouchableOpacity className="bg-primary rounded-md py-2 items-center mt-4">
            <Text className="text-white font-bold text-lg">Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Daftar;
