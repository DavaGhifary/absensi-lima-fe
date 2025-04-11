import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

const scheduleData: any = {
  Senin: [
    { jam: "07:00-07:40", pelajaran: "UPACARA", isHeader: true },
    {
      jam: "07:40-08:20",
      pelajaran: "Matematika",
      kode: "G3",
      ruang: "RC 2.4",
    },
    {
      jam: "08:20-09:00",
      pelajaran: "Matematika",
      kode: "G3",
      ruang: "RC 2.4",
    },
    {
      jam: "09:00-09:40",
      pelajaran: "Matematika",
      kode: "G3",
      ruang: "RC 2.4",
    },
    { jam: "09:40-10:00", pelajaran: "ISTIRAHAT", isBreak: true },
    { jam: "10:00-10:40", pelajaran: "PAIBP", kode: "58", ruang: "RC 2.4" },
    { jam: "10:40-11:20", pelajaran: "PAIBP", kode: "58", ruang: "RC 2.4" },
    { jam: "11:20-12:00", pelajaran: "PAIBP", kode: "58", ruang: "RC 2.4" },
    { jam: "12:00-13:00", pelajaran: "ISTIRAHAT", isBreak: true },
    {
      jam: "13:00-13:40",
      pelajaran: "Bahasa Inggris",
      kode: "66",
      ruang: "RC 2.4",
    },
    {
      jam: "13:40-14:20",
      pelajaran: "Bahasa Inggris",
      kode: "66",
      ruang: "RC 2.4",
    },
    {
      jam: "14:20-15:00",
      pelajaran: "Bahasa Inggris",
      kode: "66",
      ruang: "RC 2.4",
    },
  ],
  Selasa: [],
  Rabu: [],
  Kamis: [],
  Jumat: [],
};

const JadwalMapel = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Senin");

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-bold">XII TKJ 3</Text>
          <View className="w-6" />
        </View>
      </View>

      {/* Konten */}
      <View className="flex-1 bg-white rounded-t-2xl px-4 pt-4">
        {/* Tab Hari */}
        <View className="flex-row justify-around mb-4">
          {days.map((day) => (
            <TouchableOpacity key={day} onPress={() => setSelectedDay(day)}>
              <Text
                className={`text-sm font-semibold px-2 ${
                  selectedDay === day
                    ? "text-primary border-b border-primary"
                    : "text-gray-500"
                }`}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Header tabel */}
        <View className="flex-row bg-gray-200 py-2 rounded-md mb-2 px-2">
          <Text className="w-[50px] font-semibold text-xs text-center">
            Jam Ke
          </Text>
          <Text className="flex-1 font-semibold text-xs text-center">
            Waktu
          </Text>
          <Text className="flex-1 font-semibold text-xs text-center">
            Pelajaran
          </Text>
          <Text className="w-[60px] font-semibold text-xs text-center">
            Kode Guru
          </Text>
          <Text className="w-[60px] font-semibold text-xs text-center">
            Ruang
          </Text>
        </View>

        {/* Isi jadwal */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {scheduleData[selectedDay]?.map((item: any, index: number) => {
            if (item.isHeader || item.isBreak) {
              return (
                <View
                  key={index}
                  className="bg-gray-300 py-1.5 my-1 rounded-md flex-row justify-between px-[68px]"
                >
                  <Text className="text-center text-xs font-semibold">
                    {item.jam}
                  </Text>
                  <Text className="text-center text-xs font-semibold">
                    {item.pelajaran}
                  </Text>
                </View>
              );
            }

            return (
              <View
                key={index}
                className="flex-row py-2 border-b border-gray-200 px-2 items-center"
              >
                <Text className="w-[50px] text-center text-xs font-medium bg-primary py-1 text-white rounded-md">
                  {index + 1}
                </Text>
                <Text className="flex-1 text-center text-xs">{item.jam}</Text>
                <Text className="flex-1 text-center text-xs">
                  {item.pelajaran}
                </Text>
                <Text className="w-[60px] text-center text-xs">
                  {item.kode}
                </Text>
                <Text className="w-[60px] text-center text-xs">
                  {item.ruang}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default JadwalMapel;
