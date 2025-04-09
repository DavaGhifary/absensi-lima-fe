import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faDesktop,
  faBuilding,
  faWrench,
  faFlask,
  faCamera,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronLeft } from "lucide-react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

// Data lengkap kelas berdasarkan jurusan
const kelasData = [
  {
    label: "TKJ",
    color: "#FEB268",
    icon: faDesktop,
    items: ["XII TKJ 1", "XII TKJ 2", "XII TKJ 3"],
  },
  {
    label: "DPIB",
    color: "#2061DC",
    icon: faBuilding,
    items: [
      "XII DPIB 1",
      "XII DPIB 2",
      "XII DPIB 3",
      "XII DPIB 4",
      "XII DPIB 5",
    ],
  },
  {
    label: "TKP",
    color: "#FFD815",
    icon: faWrench,
    items: ["XII TKP 1", "XII TKP 2"],
  },
  {
    label: "GEO",
    color: "#5CDA86",
    icon: faRuler,
    items: ["XII GEO 1", "XII GEO 2"],
  },
  {
    label: "KA",
    color: "#EC615A",
    icon: faFlask,
    items: ["XII KA 1", "XII KA 2"],
  },
  {
    label: "PF",
    color: "#383635",
    icon: faCamera,
    items: ["XII PF 1"],
  },
];

const LihatSemuaJadwalKelas = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { category } = route.params; // contoh: "XII"

  // Filter data berdasarkan kategori
  const filteredData = kelasData
    .map((group) => {
      const filteredItems = group.items.filter((item) =>
        item.startsWith(category)
      );
      return {
        ...group,
        items: filteredItems,
      };
    })
    .filter((group) => group.items.length > 0); // Hapus jurusan yang tidak ada kelasnya

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-bold">Kelas {category}</Text>
          <View className="w-6" />
        </View>
      </View>

      {/* Konten kelas */}
      <View className="flex-1 bg-white rounded-t-2xl px-6 py-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredData.map((group, index) => (
            <View key={index} className="mb-4">
              <Text className="font-bold text-base mb-2">{group.label}</Text>
              <View className="flex-row flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <View key={idx}>
                    <TouchableOpacity
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: group.color }}
                    >
                      <FontAwesomeIcon icon={group.icon} size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="text-black text-xs mt-1 text-center">{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LihatSemuaJadwalKelas;
