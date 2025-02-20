import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Mail, Lock, Eye, EyeOff } from "lucide-react-native";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-white justify-center px-14">
      {/* Header */}
      <Text className="text-2xl font-bold text-primary">Selamat Datang,</Text>
      <Text className="text-base text-primary font-semibold mb-8">
        Login untuk Mengakses Fitur
      </Text>

      <View className="h-64 w-64 bg-gray-300 mb-6" />

      {/* Input Email */}
      <View className="mb-4">
        <Text className="text-sm text-primary mb-1">Email</Text>
        <View className="flex-row items-center border border-blue-500 rounded-md px-3 py-1">
          <Mail className="text-primary w-5 h-5" />
          <TextInput
            className="flex-1 ml-3 text-sm"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>

      {/* Input Password */}
      <View className="mb-4">
        <Text className="text-sm text-primary mb-1">Kata Sandi</Text>
        <View className="flex-row items-center border border-blue-500 rounded-md px-3 py-1">
          <Lock className="text-primary w-5 h-5" />
          <TextInput
            className="flex-1 ml-3 text-sm"
            placeholder="Kata Sandi"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="ml-2"
          >
            {showPassword ? (
              <EyeOff className="text-primary w-5 h-5" />
            ) : (
              <Eye className="text-primary w-5 h-5" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="mt-2">
          <Text className="text-right text-sm font-semibold text-primary">
            Lupa Kata Sandi?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Masuk */}
      <TouchableOpacity
        className="bg-blue-500 rounded-md py-3 mb-4"
        onPress={() => console.log("Login pressed")}
      >
        <Text className="text-white text-center font-medium">Masuk</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View className="flex-row justify-center">
        <Text className="text-sm text-gray-500">Tidak memiliki akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
          <Text className="text-sm text-primary font-semibold">Daftar sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
