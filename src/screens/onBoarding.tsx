import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Mudah dan Cepat!",
      description:
        "Kelola kehadiranmu dengan lebih praktis melalui aplikasi absensi sekolah.",
      image: require("../assets/image/image-slide-1.png"),
    },
    {
      title: "Pantau Kehadiran!",
      description:
        "Lihat statistik kehadiran secara langsung, mulai dari hari ini hingga rekap bulanan.",
      image: require("../assets/image/image-slide-2.png"),
    },
    {
      title: "Notifikasi Penting!",
      description:
        "Dapatkan pengingat otomatis tentang Absensi, Jam Masuk, dan Jadwal Mapel.",
      image: require("../assets/image/image-slide-3.png"),
    },
  ];

  const handleGetStarted = () => {
    navigation.navigate("AwalScreen");
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / width);
    setCurrentPage(pageIndex);
  };

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
            listener: handleScroll,
          }
        )}
        scrollEventThrottle={16}
      >
        {pages.map((page, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.95, 1, 0.95],
            extrapolate: "clamp",
          });

          return (
            <View
              key={index}
              style={{ width }}
              className="justify-center items-center px-6"
            >
              <Animated.Image
                source={page.image}
                className="w-72 h-72 mb-6"
                resizeMode="contain"
                style={{ opacity, transform: [{ scale }] }}
              />
              <Animated.Text
                className="text-2xl font-bold text-blue-500 mb-2 text-center"
                style={{ opacity }}
              >
                {page.title}
              </Animated.Text>
              <Animated.Text
                className="text-center text-gray-500 px-4"
                style={{ opacity }}
              >
                {page.description}
              </Animated.Text>
            </View>
          );
        })}
      </Animated.ScrollView>

      {/* Dot Indicator - naik dekat deskripsi */}
      <View className="flex-row justify-center space-x-2 mt-3">
        {pages.map((_, index) => (
          <View
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              currentPage === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

      {/* Tombol Get Started */}
      {currentPage === pages.length - 1 && (
        <View className="items-center mt-6 mb-8">
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
