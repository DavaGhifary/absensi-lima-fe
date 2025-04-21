import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { getActiveLokasi, LokasiAbsen } from "../../services/api";
import * as Location from "expo-location";
import { User } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

const AbsenMaps = () => {
  const navigation = useNavigation();
  const [lokasiAbsen, setLokasiAbsen] = useState<LokasiAbsen | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLokasi = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLoading(false);
          return;
        }

        const lokasiUser = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: lokasiUser.coords.latitude,
          longitude: lokasiUser.coords.longitude,
        });

        const lokasi = await getActiveLokasi();
        setLokasiAbsen(lokasi);
      } catch (error) {
        // Error handling disesuaikan di UI, jadi tidak perlu log ke console
      } finally {
        setLoading(false);
      }
    };

    fetchLokasi();
  }, []);

  const isUserInRadius = () => {
    if (!userLocation || !lokasiAbsen) return false;

    const toRad = (value: number) => (value * Math.PI) / 180;

    const R = 6371e3; // meter
    const φ1 = toRad(userLocation.latitude);
    const φ2 = toRad(Number(lokasiAbsen.latitude));
    const Δφ = toRad(Number(lokasiAbsen.latitude) - userLocation.latitude);
    const Δλ = toRad(Number(lokasiAbsen.longitude) - userLocation.longitude);

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) *
      Math.cos(φ2) *
      Math.sin(Δλ / 2) *
      Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance <= Number(lokasiAbsen.radius);
  };

  if (loading || !lokasiAbsen || !userLocation) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#2061DC" />
        <Text className="mt-4">Memuat lokasi absen & lokasi kamu...</Text>
      </View>
    );
  }

  const dalamRadius = isUserInRadius();

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width, height }}
        initialRegion={{
          latitude: Number(lokasiAbsen.latitude),
          longitude: Number(lokasiAbsen.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(lokasiAbsen.latitude),
            longitude: Number(lokasiAbsen.longitude),
          }}
          title="Lokasi Absen"
          description="Lokasi yang ditentukan oleh admin"
        />

        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
          title="Lokasi Kamu"
        >
          <View
            style={{
              backgroundColor: "#2061DC",
              padding: 6,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
            }}
          >
            <User color="#fff" size={24} />
          </View>
        </Marker>
        <Circle
          center={{
            latitude: Number(lokasiAbsen.latitude),
            longitude: Number(lokasiAbsen.longitude),
          }}
          radius={Number(lokasiAbsen.radius)}
          strokeColor="#2061DC"
          fillColor="rgba(32, 97, 220, 0.2)"
        />
      </MapView>

      <TouchableOpacity
        className="absolute top-12 left-5 bg-white p-2 rounded-full shadow"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={24} color="black" />
      </TouchableOpacity>

      <View className="absolute bottom-0 w-full h-64 bg-white p-10 rounded-t-3xl shadow-lg">
        <Text className="text-base font-bold text-center mt-5">
          {dalamRadius
            ? "Kamu berada di SMKN 5 Bandung"
            : "Kamu sedang tidak berada di SMKN 5 BANDUNG"}
        </Text>
        <Text
          className={`text-center mt-1 mx-3 ${dalamRadius ? "text-gray-600" : "text-red-600"
            }`}
        >
          {dalamRadius
            ? "Kamu sudah memenuhi syarat absen. Lanjutkan absensi sebelum terlambat!!"
            : "Kamu belum memenuhi syarat absen, segera masuk ke area SMKN 5 BANDUNG !"}
        </Text>

        <TouchableOpacity
          className={`p-3 rounded-lg mt-4 ${dalamRadius ? "bg-blue-600" : "bg-gray-400"
            }`}
          onPress={() =>
            dalamRadius ? navigation.navigate("AbsenSend") : null
          }
          disabled={!dalamRadius}
        >
          <Text className="text-white text-center font-semibold">
            {dalamRadius ? "Lanjut Absen" : "Tidak Bisa Melanjutkan Absen"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AbsenMaps;
