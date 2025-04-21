import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert } from "react-native";
import {
  User,
  Lock,
  Bell,
  MapPin,
  Info,
  LogOut,
  ChevronRight,
  ShieldAlert,
  MessageSquareMore,
  Power,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../../services/api";
import { CommonActions } from '@react-navigation/native';

const Profil = () => {
  const navigation = useNavigation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
      await AsyncStorage.removeItem("user");
  
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Masuk' }], 
        })
      );
    } catch (error) {
      // console.log("Gagal logout:", error);
    }
  };
  

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48 bg-primary justify-center px-8 pt-12 rounded-b-3xl">
        <View className="flex-row items-center space-x-4">
          <View className="w-16 h-16 bg-white rounded-full justify-center items-center">
            <Text className="text-xl text-gray-500">👤</Text>
          </View>
          <View>
            <Text className="text-white text-xl font-bold">
              Budiono Siregar
            </Text>
            <Text className="text-white text-sm">
              XII Teknik Komputer dan Jaringan
            </Text>
          </View>
        </View>
      </View>

      {/* Body */}
      <ScrollView className="flex-1 bg-white rounded-t-xl px-6 pt-6">
        {/* Section 1: Profil */}
        <Text className="text-xs text-gray-500 mb-2">Profil</Text>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <User size={20} color="#000" />
            <Text className="text-base">Detail Akun</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>

        {/* Section 2: Pengaturan Akun */}
        <Text className="text-xs text-gray-500 mt-5 mb-2">Pengaturan Akun</Text>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <Lock size={20} color="#000" />
            <Text className="text-base">Ganti Kata Sandi</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <Bell size={20} color="#000" />
            <Text className="text-base">Notifikasi</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <MapPin size={20} color="#000" />
            <Text className="text-base">Izin Lokasi</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>

        {/* Section 3: Aplikasi & Bantuan */}
        <Text className="text-xs text-gray-500 mt-5 mb-2">
          Aplikasi & Bantuan
        </Text>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <MessageSquareMore size={20} color="#000" />
            <Text className="text-base">FAQ</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <Info size={20} color="#000" />
            <Text className="text-base">Tentang Aplikasi</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-200">
          <View className="flex-row items-center space-x-3">
            <ShieldAlert size={20} color="#000" />
            <Text className="text-base">Syarat & Ketentuan</Text>
          </View>
          <ChevronRight className="text-gray-300" />
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          className="flex-row items-center justify-between py-4 mt-6 border-b border-gray-200"
          onPress={() => setShowLogoutModal(true)}
        >
          <View className="flex-row items-center space-x-3">
            <LogOut size={20} color="red" />
            <Text className="text-base text-red-500 font-semibold">Keluar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal Logout */}
      <Modal
        animationType="fade"
        transparent
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50 px-6">
          <View className="w-full bg-white rounded-xl p-6 items-center">
            <View className="w-14 h-14 bg-red-100 rounded-full justify-center items-center mb-4">
              <Info size={28} color="red" />
            </View>
            <Text className="text-lg font-bold mb-1">Keluar</Text>
            <Text className="text-sm text-center text-gray-600 mb-4">
              Apakah anda yakin ingin keluar ?
            </Text>
            <View className="flex-row justify-between w-full space-x-4">
              <TouchableOpacity
                onPress={() => setShowLogoutModal(false)}
                className="flex-1 bg-gray-200 rounded-md py-2 items-center"
              >
                <Text className="text-gray-700 font-semibold">Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
                className="flex-1 bg-[#FAD1CF] rounded-md py-2 items-center"
              >
                <Text className="text-red-500 font-semibold">Keluar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profil;
