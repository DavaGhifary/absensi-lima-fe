import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

const AbsenSend = ({ navigation }: any) => {
  const ImageAbsenSend = require("../../assets/image/image-AbsenSend.png");

  return (
    <View className="flex-1 bg-primary">
      <View className="flex-row items-center justify-between px-14 pt-20">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Absen</Text>
        <View className="w-6" />
      </View>

      <View className="flex items-center justify-center mb-6 mt-6">
        <Image source={ImageAbsenSend} style={{ width: 300, height: 300 }} />
      </View>

      <View className="flex-1 bg-white rounded-t-3xl px-14 pt-6">
        <Text className="text-sm font-semibold mt-10 mb-2">Keterangan Absen</Text>
        <TextInput
          placeholder="Masuk"
          className="border border-gray-300 rounded-md p-3 mb-5"
        />
        <TouchableOpacity
          className="bg-primary rounded-lg p-4"
          onPress={() => navigation.navigate("AbsenResult")}
        >
          <Text className="text-center text-white font-semibold">Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AbsenSend;
