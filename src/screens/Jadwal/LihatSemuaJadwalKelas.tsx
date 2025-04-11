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

// Data kelas lengkap
const kelasData = [
  {
    label: "TKJ",
    color: "#FEB268",
    icon: faDesktop,
    items: [
      "X TKJ 1",
      "X TKJ 2",
      "X TKJ 3",
      "XI TKJ 1",
      "XI TKJ 2",
      "XI TKJ 3",
      "XII TKJ 1",
      "XII TKJ 2",
      "XII TKJ 3",
    ],
  },
  {
    label: "DPIB",
    color: "#2061DC",
    icon: faBuilding,
    items: [
      "X DPIB 1",
      "X DPIB 2",
      "X DPIB 3",
      "X DPIB 4",
      "X DPIB 5",
      "XI DPIB 1",
      "XI DPIB 2",
      "XI DPIB 3",
      "XI DPIB 4",
      "XI DPIB 5",
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
    items: [
      "X TKP 1",
      "X TKP 2",
      "XI TKP 1",
      "XI TKP 2",
      "XII TKP 1",
      "XII TKP 2",
    ],
  },
  {
    label: "GEO",
    color: "#5CDA86",
    icon: faRuler,
    items: [
      "X GEO 1",
      "X GEO 2",
      "XI GEO 1",
      "XI GEO 2",
      "XII GEO 1",
      "XII GEO 2",
    ],
  },
  {
    label: "KA",
    color: "#EC615A",
    icon: faFlask,
    items: [
      "X KA 1",
      "X KA 2",
      "XI KA 1",
      "XI KA 2",
      "XII KA 1",
      "XII KA 2",
      "XIII KA 1",
      "XIII KA 2",
    ],
  },
  {
    label: "PF",
    color: "#383635",
    icon: faCamera,
    items: ["X PF 1", "XI PF 1", "XII PF 1"],
  },
];

// Fungsi konversi angka ke romawi
const numberToRoman = (num: number): string => {
  const mapping: { [key: number]: string } = {
    10: "X",
    11: "XI",
    12: "XII",
    13: "XIII",
  };
  return mapping[num] || "";
};

const LihatSemuaJadwalKelas = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { category } = route.params; // 10, 11, 12, 13
  const romanCategory = numberToRoman(category);

  // Filter data sesuai tingkat kelas
  const filteredData = kelasData
    .map((group) => {
      const filteredItems = group.items.filter((item) =>
        item.includes(`${romanCategory} `)
      );
      return {
        ...group,
        items: filteredItems,
      };
    })
    .filter((group) => group.items.length > 0);

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
                    onPress={() =>
                      navigation.navigate("JadwalMapel")
                    }
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: group.color }}
                    >
                      <FontAwesomeIcon
                        icon={group.icon}
                        size={24}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text className="text-black text-xs mt-1 text-center">
                      {item}
                    </Text>
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
