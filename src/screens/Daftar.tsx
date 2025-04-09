import { ChevronLeft, Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import CheckboxDaftar from "../components/checbox/checboxDaftar";
import { api } from "../services/api";

const Daftar = ({ navigation }: any) => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [nisn, setNisn] = useState("");
  const [password, setPassword] = useState("");
  const [Konfirmasipassword, setKonfirmasiPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasiPassword, setShowKonfirmasiPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = async () => {
    if (!userName || !email || !nisn || !password || !Konfirmasipassword) {
      Alert.alert("Peringatan", "Semua field wajib diisi!");
      return;
    }
  
    if (password !== Konfirmasipassword) {
      Alert.alert("Peringatan", "Konfirmasi password tidak sama!");
      return;
    }
  
    if (!isChecked) {
      Alert.alert("Peringatan", "Harap setujui Syarat & Ketentuan terlebih dahulu.");
      return;
    }
  
    try {
      const response = await api.post("/register", {
        userName,
        email,
        nisn,
        password,
        password_confirmation: Konfirmasipassword,
        role: "siswa",
      });
  
      console.log("Register Success:", response.data);
      Alert.alert("Sukses", "Registrasi berhasil!");
      navigation.navigate("Masuk");
    } catch (error: any) {
      console.error("Register Failed:", error.response?.data || error.message);
      Alert.alert("Gagal", error.response?.data?.message || "Registrasi gagal. Coba lagi.");
    }
  };
  

  return (
    <View className="flex-1 bg-primary">
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <ChevronLeft
            className="text-white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">Daftar</Text>
          <Text className="w-6" />
        </View>
      </View>

      <View className="flex-1 bg-white rounded-t-2xl px-14">
        {/* Header */}
        <View className="mt-6">
          <Text className="text-2xl font-bold">Daftar Sekarang!</Text>
          <Text className="text-gray-500">Isikan detail info akun mu</Text>
        </View>

        {/* Form */}
        <View className="mt-8">
          {/* userName */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">Nama</Text>
            <TextInput
              placeholder="Masukkan Nama"
              placeholderTextColor="#A0A0A0"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
              value={userName}
              onChangeText={setuserName}
            />
          </View>

          {/* Email */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              placeholderTextColor="#A0A0A0"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* NISN */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">NISN</Text>
            <TextInput
              placeholder="Masukkan NISN"
              placeholderTextColor="#A0A0A0"
              keyboardType="numeric"
              className="bg-gray-100 rounded-md px-4 py-3 text-black"
              value={nisn}
              onChangeText={setNisn}
            />
          </View>

          {/* Password */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">Kata Sandi</Text>
            <View className="relative flex-row items-center">
              <TextInput
                className="flex-1 text-black bg-gray-100 rounded-md px-4 py-3"
                placeholder="Masukkan Kata Sandi"
                placeholderTextColor="#A0A0A0"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
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

          {/* Konfirmasi Password */}
          <View className="mb-2">
            <Text className="text-gray-600 mb-1">Konfirmasi Kata Sandi</Text>
            <View className="relative flex-row items-center">
              <TextInput
                className="flex-1 text-black bg-gray-100 rounded-md px-4 py-3"
                placeholder="Masukkan Konfirmasi Kata Sandi"
                placeholderTextColor="#A0A0A0"
                secureTextEntry={!showKonfirmasiPassword}
                value={Konfirmasipassword}
                onChangeText={setKonfirmasiPassword}
              />
              <TouchableOpacity
                onPress={() =>
                  setShowKonfirmasiPassword(!showKonfirmasiPassword)
                }
                className="ml-2 absolute right-3"
              >
                {showKonfirmasiPassword ? (
                  <EyeOff className="text-gray-500 w-5 h-5" />
                ) : (
                  <Eye className="text-gray-500 w-5 h-5" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Checkbox Syarat */}
          <View className="flex-row items-center space-x-2">
            <CheckboxDaftar
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text className="text-gray-500 text-xs mt-2 w-56">
              Dengan mendaftar, Anda menyetujui
              <Text className="text-primary"> Syarat & Ketentuan</Text>
            </Text>
          </View>

          {/* Tombol Daftar */}
          <TouchableOpacity
            className="bg-primary rounded-md py-2 items-center mt-4"
            onPress={handleRegister}
          >
            <Text className="text-white font-bold text-lg">Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Daftar;
