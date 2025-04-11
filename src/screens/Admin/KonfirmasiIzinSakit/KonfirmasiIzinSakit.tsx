import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ChevronLeft } from "lucide-react-native";

const tabs = ["Menunggu", "Disetujui", "Ditolak"];

const dummyData = [
  {
    id: 1,
    tanggal: "22 Maret 2025",
    nama: "Budi Santoso",
    kelas: "TKJ 1",
    jenis: "Sakit",
    alasan: "Flu berat, butuh istirahat total.",
    status: "Menunggu",
    adaSurat: true,
  },
  {
    id: 2,
    tanggal: "22 Maret 2025",
    nama: "Ahwan Rewahden",
    kelas: "TKJ 3",
    jenis: "Izin",
    alasan: "Panggil ke luar kota bersama keluarga.",
    status: "Menunggu",
    adaSurat: false,
  },
  {
    id: 3,
    tanggal: "22 Maret 2025",
    nama: "Budi Santoso",
    kelas: "TKJ 1",
    jenis: "Sakit",
    alasan: "Flu berat, butuh istirahat total.",
    status: "Menunggu",
    adaSurat: true,
  },
];

const KonfirmasiIzinSakit = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState("Menunggu");

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48 rounded-b-2xl bg-primary">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-bold">
            Konfirmasi Izin / Sakit
          </Text>
          <View className="w-6" />
        </View>
      </View>

      {/* Konten */}
      <View className="flex-1 bg-white -mt-6 rounded-t-2xl px-4 pt-4">
        {/* Tabs */}
        <View className="flex-row justify-around mb-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab ? "border-b-2 border-primary" : ""
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  activeTab === tab ? "text-primary" : "text-gray-400"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* List */}
        <ScrollView>
          {dummyData
            .filter((item) => item.status === activeTab)
            .map((item) => (
              <View
                key={item.id}
                className="border border-gray-200 rounded-md p-3 mb-3 bg-white"
              >
                <View className="flex-row items-center justify-between">
                  <View>
                    {/* Tanggal */}
                    <Text className="text-xs text-gray-500 mb-2">
                      {item.tanggal}
                    </Text>

                    {/* Nama, Kelas, Jenis */}
                    <Text className="text-sm font-semibold text-gray-800 mb-1">
                      {item.nama} | {item.kelas} | {item.jenis}
                    </Text>

                    {/* Alasan */}
                    <Text className="text-xs text-gray-500 mb-3">
                      {item.alasan}
                    </Text>
                  </View>

                  <View className="items-center">
                    <Text>{item.status}</Text>
                  </View>
                </View>

                {/* Footer: Surat dan Tombol Aksi */}
                <View className="flex-row justify-between items-center">
                  {/* Lihat Surat */}
                  {item.adaSurat ? (
                    <TouchableOpacity>
                      <Text className="text-xs text-blue-500 underline">
                        Lihat Surat
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View />
                  )}

                  {/* Tombol aksi */}
                  {activeTab === "Menunggu" && (
                    <View className="flex-row space-x-2">
                      <TouchableOpacity className="bg-green-500 rounded-md py-1 px-3">
                        <Text className="text-white text-xs font-semibold">
                          ✔ Terima
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="bg-red-500 rounded-md py-1 px-3">
                        <Text className="text-white text-xs font-semibold">
                          ✖ Tolak
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default KonfirmasiIzinSakit;
