import { AlertCircle, ChevronLeft } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ResultAbsenError = ({ navigation, route }: any) => {
  const { message } = route.params || {
    message: "Anda sudah melakukan absen hari ini!",
  };

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <ChevronLeft
            className="text-white"
            onPress={() => navigation.goBack()}
          />
          <Text className="text-xl text-white font-bold">Absen</Text>
          <Text className="w-6" />
        </View>
      </View>

      {/* Body */}
      <View className="flex-1 bg-white rounded-t-2xl px-14">
        <View className="flex items-center mt-32">
          <View
            className="w-40 h-40 p-4 rounded-full"
            style={{ backgroundColor: "rgba(32, 97, 220, 0.2)" }}
          >
            <View className="bg-yellow-500 w-32 h-32 rounded-full flex justify-center items-center p-3">
              <AlertCircle className="text-white" size={64} />
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xl text-center font-bold text-gray-600">
            Gagal Melakukan Absen
          </Text>
          <Text className="text-gray-500 text-sm text-center px-2">
            {message}
          </Text>
        </View>

        <TouchableOpacity
          className="bg-white border border-primary rounded-lg p-4 mt-5"
          onPress={() => navigation.navigate("Beranda")}
        >
          <Text className="text-center text-primary">Kembali Ke Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-primary rounded-lg p-4 mt-2"
          onPress={() => navigation.navigate("RiwayatAbsen")}
        >
          <Text className="text-center text-white">Lihat Riwayat Absen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultAbsenError;
