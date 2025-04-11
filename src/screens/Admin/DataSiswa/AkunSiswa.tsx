import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ChevronLeft, Search, Plus } from "lucide-react-native";

const dummyData = Array.from({ length: 1 }).map((_, index) => ({
  no: index + 1,
  nama: `Budiono Siregar ${index + 1}`,
  nis: "123456",
  kelas: "XII",
  jurusan: "TKJ",
  ttl: "01-01-2000",
  jenisKelamin: "L",
  email: "email@example.com",
  noHp: "08123456789",
  aktif: true,
}));

const AkunSiswa = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14 pt-10">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Data Siswa</Text>
          <View style={{ width: 24 }} />
        </View>
        <View className="relative mx-6 mb-3">
          <Search className="absolute top-2.5 left-3 text-gray-400 z-10" />
          <TextInput
            className="bg-white border border-gray-300 rounded-full pl-10 py-2 text-gray-600 text-base"
            placeholder="Cari"
          />
        </View>
      </View>

      {/* Body */}
      <View className="flex-1 bg-white rounded-t-2xl px-0 py-4 relative">
        {/* Tombol Tambah Data */}
        <View className="px-6 mb-4">
          <TouchableOpacity className="bg-primary flex-row items-center px-4 py-2 rounded-lg self-start">
            <Plus color="white" size={18} />
            <Text className="text-white font-semibold ml-2">Tambah Data</Text>
          </TouchableOpacity>
        </View>

        {/* Scroll Horizontal Tabel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ minWidth: 900 }} className="mx-6">
            {/* Table Header */}
            <View className="flex-row border-b border-gray-300 py-2 px-6 bg-gray-100">
              <Text className="w-10 font-bold text-xs text-center">No</Text>
              <Text className="w-32 font-bold text-xs text-center">Nama Siswa</Text>
              <Text className="w-24 font-bold text-xs text-center">NIS</Text>
              <Text className="w-20 font-bold text-xs text-center">Kelas</Text>
              <Text className="w-20 font-bold text-xs text-center">Jurusan</Text>
              <Text className="w-28 font-bold text-xs text-center">TTL</Text>
              <Text className="w-24 font-bold text-xs text-center">Jenis Kelamin</Text>
              <Text className="w-40 font-bold text-xs text-center">Email</Text>
              <Text className="w-32 font-bold text-xs text-center">No HP</Text>
              <Text className="w-20 font-bold text-xs text-center">Aktif</Text>
            </View>

            {/* Table Body */}
            <ScrollView>
              {dummyData.map((item, index) => (
                <View
                  key={index}
                  className={`flex-row py-2 px-6 border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <Text className="w-10 text-xs text-center">{item.no}</Text>
                  <Text className="w-32 text-xs text-center">{item.nama}</Text>
                  <Text className="w-24 text-xs text-center">{item.nis}</Text>
                  <Text className="w-20 text-xs text-center">{item.kelas}</Text>
                  <Text className="w-20 text-xs text-center">{item.jurusan}</Text>
                  <Text className="w-28 text-xs text-center">{item.ttl}</Text>
                  <Text className="w-24 text-xs text-center">{item.jenisKelamin}</Text>
                  <Text className="w-40 text-xs text-center">{item.email}</Text>
                  <Text className="w-32 text-xs text-center">{item.noHp}</Text>
                  <Text className="w-20 text-xs text-center">
                    {item.aktif ? "✅" : "❌"}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AkunSiswa;
