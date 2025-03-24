import { ChevronLeft, MapPin } from "lucide-react-native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Absen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primary">
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
      <View className="flex-1 bg-white rounded-t-2xl px-14">
        <View className="flex items-center mt-40">
          <View
            className="w-40 h-40 p-4 rounded-full"
            style={{ backgroundColor: "rgba(32, 97, 220, 0.2)" }}
          >
            <View className="bg-[#2061DC] w-32 h-32 rounded-full flex justify-center items-center p-3">
              <MapPin className="text-white" size={64} />
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-xl text-center font-bold">
            Aktifkan Lokasi untuk Absen
          </Text>
          <Text className="text-gray-500 text-xs text-center">
            Kami memerlukan akses lokasi untuk memastikan kamu berada di area
            yang ditentukan.
          </Text>
        </View>

        <TouchableOpacity className="bg-primary rounded-lg p-4 mt-5">
          <Text className="text-center text-white">Izinkan Akses Lokasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Absen;
