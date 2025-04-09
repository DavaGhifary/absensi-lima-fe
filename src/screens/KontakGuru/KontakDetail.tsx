import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const KontakDetail = ({ navigation, route }: any) => {
  const { guru } = route.params;

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center px-14">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" size={28} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Konten */}
      <View className="flex-1 bg-white rounded-t-2xl px-8 pt-20 items-center">
        {/* Avatar */}
        <View className="w-28 h-28 bg-gray-200 rounded-full overflow-hidden absolute -top-14">
          <Image
            source={require("../../assets/image/Avatar.png")}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Nama */}
        <Text className="text-xl font-bold mt-4">{guru.name}</Text>

        {/* Kode Guru */}
        <View className="w-full bg-gray-100 rounded-md p-4 mt-4">
          <Text className="text-gray-500 text-sm mb-1">Kode Guru</Text>
          <Text className="text-black font-semibold">{guru.kode}</Text>
        </View>

        {/* Mata Pelajaran */}
        <View className="w-full bg-gray-100 rounded-md p-4 mt-3">
          <Text className="text-gray-500 text-sm mb-1">Mata Pelajaran</Text>
          <Text className="text-black font-semibold">{guru.mapel}</Text>
        </View>

        {/* Nomor Telepon */}
        <View className="w-full bg-gray-100 rounded-md p-4 mt-3">
          <Text className="text-gray-500 text-sm mb-1">Nomor Telepon</Text>
          <Text className="text-black font-semibold">(+62) {guru.phone.slice(2)}</Text>
        </View>

        {/* Tombol WhatsApp */}
        <TouchableOpacity
          className="w-full bg-gray-100 flex-row items-center justify-between px-4 py-5 rounded-md mt-3"
          
        >
          <Text className="text-black font-bold text-lg">Whatsapp</Text>
          <View className="bg-[#25D366] w-10 h-10 rounded-full justify-center items-center">
            <FontAwesomeIcon icon={faWhatsapp} size={32} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KontakDetail;
