import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import { ChevronLeft, Calendar } from "lucide-react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    date: "Sen - 3 Maret 2025",
    time: "6:20 AM",
    status: "Tepat Waktu",
    type: "Masuk",
  },
  {
    date: "Sel - 4 Maret 2025",
    time: "7:05 AM",
    status: "Terlambat",
    type: "Masuk",
  },
  {
    date: "Rab - 5 Maret 2025",
    time: "--:--",
    status: "Menunggu",
    type: "Izin",
  },
  {
    date: "Kam - 6 Maret 2025",
    time: "--:--",
    status: "Diterima",
    type: "Izin",
  },
  { date: "Jum - 7 Maret 2025", time: "--:--", status: "", type: "" },
  { date: "Sab - 8 Maret 2025", time: "--:--", status: "", type: "" },
  { date: "Min - 9 Maret 2025", time: "--:--", status: "", type: "" },
  {
    date: "Sen - 10 Maret 2025",
    time: "6:20 AM",
    status: "Tepat Waktu",
    type: "Masuk",
  },
];

const getStatusColor = (status: string) => {
  if (status === "Tepat Waktu") return "text-green-500";
  if (status === "Terlambat") return "text-red-500";
  if (status === "Menunggu") return "text-gray-500";
  if (status === "Diterima") return "text-green-600";
  return "text-gray-400";
};

const getIconByType = (type: string) => {
  if (type === "Masuk")
    return { icon: faArrowUpRightFromSquare, bg: "#DBEAFE", color: "#3B82F6" }; // biru muda dan biru
  if (type === "Izin")
    return { icon: faArrowUpRightFromSquare, bg: "#DBEAFE", color: "#3B82F6" };
  return { icon: faArrowUpRightFromSquare, bg: "#FECACA", color: "#EF4444" }; // merah muda dan merah
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Ags",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const RiwayatAbsen = ({ navigation }: any) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // 0-indexed
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const handleMonthChange = (offset: number) => {
    let newMonth = selectedMonth + offset;
    let newYear = selectedYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
  };

  const handleSelectMonth = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
    setShowMonthPicker(false);
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
          <Text className="text-xl text-white font-bold">Riwayat Absen</Text>
          <Text className="w-6" />
        </View>
      </View>

      {/* Konten */}
      <View className="flex-1 bg-white rounded-t-3xl pt-4 px-6">
        {/* Navigasi Bulan */}
        <View className="flex-row justify-between items-center mb-4 px-2">
          <TouchableOpacity
            onPress={() => setShowMonthPicker(true)}
            className="w-10 h-10 rounded-md items-center justify-center"
            style={{ backgroundColor: "#DBEAFE" }}
          >
            <Calendar size={20} color="#3B82F6" />
          </TouchableOpacity>

          <View className="flex-row items-center space-x-12">
            <TouchableOpacity onPress={() => handleMonthChange(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </TouchableOpacity>

            <Text className="text-base font-medium">
              {MONTHS[selectedMonth]}
            </Text>

            <TouchableOpacity onPress={() => handleMonthChange(1)}>
              <FontAwesomeIcon icon={faArrowRight} />
            </TouchableOpacity>
          </View>

          <View className="w-5" />
        </View>

        {/* Modal Picker Bulan */}
        <Modal
          transparent
          visible={showMonthPicker}
          animationType="fade"
          onRequestClose={() => setShowMonthPicker(false)}
        >
          <View className="flex-1 items-center justify-center bg-black/50">
            <View className="bg-white rounded-lg w-72">
              <Text className="text-center bg-primary rounded-t-lg text-white font-bold text-lg mb-2 py-2">
                {selectedYear}
              </Text>

              <View className="flex flex-wrap flex-row justify-between px-4 py-3">
                {MONTHS.map((month, idx) => (
                  <TouchableOpacity
                    key={month}
                    className="w-1/4 p-2"
                    onPress={() => handleSelectMonth(idx)}
                  >
                    <Text
                      className={`text-center ${
                        selectedMonth === idx
                          ? "text-primary font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      {month}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </Modal>

        {/* List Absen */}
        <ScrollView className="space-y-3" showsVerticalScrollIndicator={false}>
          {data.map((item, index) => {
            const { icon, bg, color } = getIconByType(item.type);
            return (
              <View
                key={index}
                className="rounded-xl border border-gray-200 px-4 py-3 flex-row justify-between items-center"
              >
                <View className="flex-row items-center">
                  <View
                    className="w-10 h-10 rounded-md items-center justify-center mr-3"
                    style={{ backgroundColor: bg }}
                  >
                    <FontAwesomeIcon icon={icon} size={18} color={color} />
                  </View>
                  <View>
                    <Text className="font-semibold">{item.type || "-"}</Text>
                    <Text className="text-gray-500 text-sm">{item.date}</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="font-bold">{item.time}</Text>
                  <Text className={`text-xs ${getStatusColor(item.status)}`}>
                    {item.status || "-"}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default RiwayatAbsen;
