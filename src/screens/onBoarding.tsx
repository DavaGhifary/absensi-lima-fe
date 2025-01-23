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
      title: "Fitur Lengkap!",
      description: "Manfaatkan fitur yang dirancang untuk mempermudah absensi.",
    },
    {
      title: "Siap Memulai!",
      description: "Ayo mulai perjalananmu sekarang dengan aplikasi ini.",
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
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
      {/* Placeholder untuk gambar */}
      <View className="h-64 w-64 bg-gray-300 mb-6" />

      {/* Judul dan Deskripsi */}
      <Text className="text-xl font-bold text-blue-500 mb-2">
        {pages[currentPage].title}
      </Text>
      <Text className="text-center text-gray-500 px-8 mb-4">
        {pages[currentPage].description}
      </Text>

      {/* Indikator dots */}
      <View className="flex-row space-x-2 mb-6">
        {pages.map((_, index) => (
          <View
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              currentPage === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

      {/* Tombol navigasi */}
      {currentPage === 0 && (
        <TouchableOpacity
          className="w-12 h-12 bg-blue-500 rounded-full justify-center items-center"
          onPress={handleNext}
        >
          <Text className="text-white text-lg">{'>'}</Text>
        </TouchableOpacity>
      )}

      {currentPage === 1 && (
        <View className="flex-row space-x-4">
          <TouchableOpacity
            className="w-12 h-12 bg-gray-300 rounded-full justify-center items-center"
            onPress={handlePrev}
          >
            <Text className="text-white text-lg">{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-12 h-12 bg-blue-500 rounded-full justify-center items-center"
            onPress={handleNext}
          >
            <Text className="text-white text-lg">{'>'}</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentPage === 2 && (
        <TouchableOpacity
          className="mt-6 w-40 h-12 bg-blue-500 rounded-full justify-center items-center"
          onPress={handleGetStarted}
        >
          <Text className="text-white text-lg">Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnboardingScreen;
