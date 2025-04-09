import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native"; // Pakai lucide-react-native untuk ikon

const { width, height } = Dimensions.get("window");

const AbsenMaps = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      {/* Map View */}
      <MapView
        style={{ width, height }}
        initialRegion={{
          latitude: -6.88942,
          longitude: 107.64641,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: -6.88942, longitude: 107.64641 }}
          title="SMKN 5 Kota Bandung"
          description="Lokasi Absen"
        />
      </MapView>

      {/* Back Button */}
      <TouchableOpacity
        className="absolute top-12 left-5 bg-white p-2 rounded-full shadow"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={24} color="black" />
      </TouchableOpacity>

      {/* Bottom Card */}
      <View className="absolute bottom-0 w-full h-64 bg-white p-10 rounded-t-3xl shadow-lg">
        <Text className="text-lg font-bold text-center mt-5">
          Kamu berada di SMKN 5 Bandung
        </Text>
        <Text className="text-center text-gray-600 mt-1 mx-3">
          Kamu sudah memenuhi syarat absen. Lanjutkan absensi sebelum terlambat!
        </Text>
        <TouchableOpacity
          className="bg-blue-600 p-3 rounded-lg mt-4"
          onPress={() => navigation.navigate("AbsenSend")}
        >
          <Text className="text-white text-center font-semibold">
            Lanjut Absen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AbsenMaps;
