import { ChevronLeft, ChevronRight } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const OnboardingScreen = ({ navigation }: any) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Mudah dan Cepat!",
      description:
        "Kelola kehadiranmu dengan lebih praktis melalui aplikasi absensi sekolah.",
    },
    {
      title: "Pantau Kehadiran!",
      description:
        "Lihat statistik kehadiran secara langsung, mulai dari hari ini hingga rekap bulanan.",
    },
    {
      title: "Notifikasi Penting!",
      description:
        "Dapatkan pengingat otomatis tentang Absensi, Jam Masuk, dan Jadwal Mapel.",
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleGetStarted = () => {
    navigation.navigate("AwalScreen");
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
      {/* Placeholder untuk gambar */}
      <View className="h-64 w-64 bg-gray-300 mb-6" />

      {/* Judul dan Deskripsi */}
      <Text className="text-2xl font-bold text-blue-500 mb-2">
        {pages[currentPage].title}
      </Text>
      <Text className="text-center text-gray-500 px-14 mb-4">
        {pages[currentPage].description}
      </Text>

      {/* Indikator dan Tombol Navigasi */}
      <View className="flex-row items-center justify-between w-full px-12">
        {/* Tombol Prev */}
        {currentPage > 0 && currentPage < 2 ? (
          <TouchableOpacity
            className="w-12 h-12 bg-white border border-primary rounded-md justify-center items-center"
            onPress={handlePrev}
          >
            <ChevronLeft className="text-primary" />
          </TouchableOpacity>
        ) : (
          <View className="w-12 h-12" />
        )}

        {/* Indikator dots */}
        <View className="flex-row space-x-2">
          {pages.map((_, index) => (
            <View
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                currentPage === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </View>

        {/* Tombol Next */}
        {currentPage < pages.length - 1 ? (
          <TouchableOpacity
            className="w-12 h-12 bg-primary rounded-md justify-center items-center"
            onPress={handleNext}
          >
            <ChevronRight className="text-white" />
          </TouchableOpacity>
        ) : (
          <View className="w-12 h-12" />
        )}
      </View>

      {/* Tombol Get Started */}
      {currentPage === 2 && (
        <View className="absolute bottom-[200px]">
          <TouchableOpacity
            className="w-72 h-12 bg-primary rounded-lg justify-center items-center"
            onPress={handleGetStarted}
          >
            <Text className="text-white text-lg">Siap untuk Absen!</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default OnboardingScreen;
