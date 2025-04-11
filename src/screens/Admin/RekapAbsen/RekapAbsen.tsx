import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheckCircle,
  faEnvelopeOpenText,
  faTimesCircle,
  faEllipsisH,
  faClipboardCheck,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const RekapAbsen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48 rounded-b-2xl bg-primary">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-bold">Rekap Absen</Text>
          <View className="w-6" />
        </View>
      </View>

      {/* Konten */}
      <View className="flex-1 bg-white -mt-6 rounded-t-2xl px-6 pt-6">
        <Text className="text-center text-base font-semibold mb-4">
          Lihat dan kelola absensi seluruh siswa dengan mudah.
        </Text>

        {/* Filter dropdown */}
        <View className="flex-row justify-between mb-6 space-x-2">
          <View className="flex-1">
            <TextInput
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
              placeholder="Semua"
            />
          </View>
          <View className="flex-1">
            <TextInput
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
              placeholder="Hari"
            />
          </View>
          <View className="flex-1">
            <TextInput
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
              placeholder="11 Apr"
            />
          </View>
        </View>

        {/* Kotak Statistik */}
        <View className="flex-row flex-wrap justify-between">
          {/* Masuk */}
          <View className="w-[48%] bg-green-300 rounded-xl p-4 mb-4">
            <FontAwesomeIcon icon={faClipboardCheck} size={32} color="white" />
            <Text className="text-white text-base font-bold mt-10">Masuk</Text>
            <Text className="text-white text-xs">1 Siswa</Text>
          </View>

          {/* Izin */}
          <View className="w-[48%] bg-orange-300 rounded-xl p-4 mb-4">
            <FontAwesomeIcon icon={faEnvelopeOpenText} size={32} color="white" />
            <Text className="text-white text-base font-bold mt-10">Izin</Text>
            <Text className="text-white text-xs">0 Siswa</Text>
          </View>

          {/* Tanpa Keterangan */}
          <View className="w-[48%] bg-red-400 rounded-xl p-4 mb-4">
            <FontAwesomeIcon icon={faTimesCircle} size={32} color="white" />
            <Text className="text-white text-base font-bold mt-10">Tanpa Keterangan</Text>
            <Text className="text-white text-xs">0 Siswa</Text>
          </View>

          {/* Lihat Selengkapnya */}
          <TouchableOpacity className="w-[48%] bg-gray-600 rounded-xl p-4 mb-4">
            <FontAwesomeIcon icon={faList} size={32} color="white" />
            <Text className="text-white text-sm font-bold mt-10">Lihat Selengkapnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RekapAbsen;
