import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SectionList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ChevronLeft, Search } from "lucide-react-native";

const DATA = [
  
  {
    title: "",
    data: [
      {
        id: 1,
        name: "Bambang Sukamto M Kom",
        kode: "02",
        mapel: "Kejuruan TKJ",
        phone: "6281234567891",
      },
      {
        id: 2,
        name: "Suherlan S.pd",
        kode: "02",
        mapel: "Bahasa Indonesia",
        phone: "6281234567891",
      },
      {
        id: 3,
        name: "Maulana Firdaus Nurrokhim S.Pd ",
        kode: "02",
        mapel: "Kejuruan TKJ",
        phone: "6281234567891",
      },
      {
        id: 3,
        name: "Hasan Sadikin S.pd ",
        kode: "02",
        mapel: "Kejuruan TKJ",
        phone: "6281234567891",
      },
      {
        id: 3,
        name: "Ema Rosmawati S.S ",
        kode: "02",
        mapel: "Bahasa Inggris",
        phone: "6281234567891",
      },
      {
        id: 3,
        name: "Cecep Rahmat Mudzakir S.Pd ",
        kode: "02",
        mapel: "BK",
        phone: "6281234567891",
      },{
        id: 3,
        name: "Hadi Abdul Fatah S.Pd ",
        kode: "02",
        mapel: "PKK",
        phone: "6281234567891",
      },
      {
        id: 3,
        name: "Iwan Kurmawansyah S.T ",
        kode: "02",
        mapel: "Kejuruan TKJ",
        phone: "6281234567891",
      },{
        id: 3,
        name: "Tristo Wijanarko I,S.pd ",
        kode: "02",
        mapel: "Kejuruan TKJ",
        phone: "6281234567891",
      },{
        id: 3,
        name: "Ade Suprihat S.pd ",
        kode: "02",
        mapel: "Kejuruan TKJ",
        phone: "6281234567891",
      },
    ],
  },
  {
    title: "",
    data: [
      { id: 3, name: "Legiyanto Spd", kode: "03", mapel: "BK", phone: "6281234567892" },
    ],
  },
  {
    title: "D",
    data: [
      {
        id: 1,
        name: "",
        kode: "03",
        mapel: "BK",
        phone: "6281234567892",
      },
    ],
  },
  // Tambah lainnya sesuai kebutuhan
];

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const KontakGuru = ({ navigation }: any) => {
  const sectionListRef = useRef<any>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const scrollToSection = (letter: string) => {
    const index = DATA.findIndex((section) => section.title === letter);
    if (index !== -1 && sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
      });
    }
    setActiveLetter(letter);
    setTimeout(() => {
      setActiveLetter(null);
    }, 700);
  };

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <View className="h-48">
        <View className="flex-1 flex-row items-center justify-between px-14 pt-10">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Kontak Guru</Text>
          <View style={{ width: 24 }} />
        </View>
        <View className="relative mx-6 mb-3">
          <Search className="absolute top-2.5 left-3 text-gray-400 z-10" />
          <TextInput
            className="bg-white border border-gray-300 rounded-full pl-10 py-2 text-gray-600 text-base"
            placeholder="Cari"
          />
        </View>
      </View>

      {/* Body */}
      <View className="flex-1 bg-white rounded-t-2xl px-6 py-2 relative">
        <SectionList
          ref={sectionListRef}
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center space-x-3 py-2"
              onPress={() =>
                navigation.navigate("KontakDetail", { guru: item })
              }
            >
              <View className="w-10 h-10 rounded-full bg-gray-200 justify-center items-center">
                <Text className="text-base">👤</Text>
              </View>
              <View>
                <Text className="font-semibold text-sm">{item.name}</Text>
                <Text className="text-xs text-gray-500">{`${item.kode}, ${item.mapel}`}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-blue-500 font-bold text-sm mt-4">
              {title}
            </Text>
          )}
          showsVerticalScrollIndicator={false}
        />

        {/* Bubble */}
        {activeLetter && (
          <View
            style={{
              position: "absolute",
              top: 35,
              right: 2,
              transform: [{ translateX: -32 }, { translateY: -32 }],
              zIndex: 50,
            }}
          >
            <View className="w-10 h-10 bg-blue-600 rounded-full justify-center items-center">
              <Text className="text-white text-lg font-bold">
                {activeLetter}
              </Text>
            </View>
          </View>
        )}

        {/* Alphabet Index */}
        <View className="absolute right-4 top-5 bottom-0 justify-center items-center">
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            {ALPHABETS.map((letter) => (
              <TouchableOpacity
                key={letter}
                onPress={() => scrollToSection(letter)}
              >
                <Text className="text-xs text-gray-400 py-1">{letter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default KontakGuru;
