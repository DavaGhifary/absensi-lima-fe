import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Mail, Lock, Eye, EyeOff, ChevronLeft } from "lucide-react-native";
import { api } from "../services/api";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDaftar = () => {
    navigation.navigate("Daftar");
  };

  const handleMasuk = async () => {
    setLoading(true);
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      const data = response.data;

      Alert.alert("Berhasil", "Login berhasil!");
      // Simpan token/data user di AsyncStorage jika perlu
      navigation.navigate("Beranda");
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        Alert.alert("Login Gagal", error.response.data.message);
      } else {
        Alert.alert("Login Gagal", "Email atau password salah.");
      }
    } finally {
      setLoading(false);
    }
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
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
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
            <Text
              className="text-right text-primary font-bold"
              onPress={handleLupaKataSandi}
            >
              Lupa Kata Sandi?
            </Text>
          </View>

          {/* Tombol Masuk */}
          <TouchableOpacity
            className="bg-primary rounded-md py-2 items-center mt-4"
            onPress={handleMasuk}
            disabled={loading}
          >
            <Text className="text-white font-bold text-lg">
              {loading ? "Memproses..." : "Masuk"}
            </Text>
          </TouchableOpacity>

          <View className="items-center mt-2">
            <Text>
              Tidak memiliki akun?{" "}
              <Text className="text-primary font-bold" onPress={handleDaftar}>
                Daftar Sekarang
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
