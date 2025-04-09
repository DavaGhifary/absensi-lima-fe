import { ChevronLeft, Search } from "lucide-react-native";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { styled } from "nativewind";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faDesktop,
  faFlask,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const data = [
  {
    id: "1",
    title: "XIII KA 1",
    category: "XIII",
    color: "#EC615A",
    icon: faFlask,
  },
  {
    id: "2",
    title: "XIII KA 2",
    category: "XIII",
    color: "#EC615A",
    icon: faFlask,
  },
  {
    id: "3",
    title: "XII TKJ 1",
    category: "XII",
    color: "#FEB268",
    icon: faDesktop,
  },
  {
    id: "4",
    title: "XII TKJ 2",
    category: "XII",
    color: "#FEB268",
    icon: faDesktop,
  },
  {
    id: "5",
    title: "XII TKJ 3",
    category: "XII",
    color: "#FEB268",
    icon: faDesktop,
  },
  {
    id: "6",
    title: "XII DPIB 1",
    category: "XII",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "7",
    title: "XII DPIB 2",
    category: "XII",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "8",
    title: "XI TKJ 1",
    category: "XI",
    color: "#FEB268",
    icon: faDesktop,
  },
  {
    id: "9",
    title: "XI TKJ 2",
    category: "XI",
    color: "#FEB268",
    icon: faDesktop,
  },
  {
    id: "10",
    title: "XI TKJ 3",
    category: "XI",
    color: "#FEB268",
    icon: faDesktop,
  },
  {
    id: "11",
    title: "XI DPIB 1",
    category: "XI",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "12",
    title: "XI DPIB 2",
    category: "XI",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "13",
    title: "XI DPIB 3",
    category: "XI",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "14",
    title: "XI DPIB 5",
    category: "XI",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "15",
    title: "X TKJ 1",
    category: "X",
    color: "#FEB268",
    icon: faBuilding,
  },
  {
    id: "16",
    title: "X TKJ 2",
    category: "X",
    color: "#FEB268",
    icon: faBuilding,
  },
  {
    id: "17",
    title: "X TKJ 3",
    category: "X",
    color: "#FEB268",
    icon: faBuilding,
  },
  {
    id: "18",
    title: "X DPIB 1",
    category: "X",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "19",
    title: "X DPIB 2",
    category: "X",
    color: "#2061DC",
    icon: faBuilding,
  },
  {
    id: "20",
    title: "X DPIB 3",
    category: "X",
    color: "#2061DC",
    icon: faBuilding,
  },
];

const Card = ({ item }: { item: { title: string; color: string; icon: any } }) => (
  <StyledView>
    <StyledView
      className="w-14 h-14 rounded-lg flex items-center justify-center mx-1"
      style={{ backgroundColor: item.color }}
    >
      <FontAwesomeIcon icon={item.icon} size={24} color="white" />
    </StyledView>
    <StyledText className="text-black text-xs text-center font-semibold">
      {item.title}
    </StyledText>
  </StyledView>
);

const renderSection = (
  title: string,
  category: string,
  navigation: any
) => (
  <StyledView>
    <StyledView className="flex-row items-center justify-between mt-4">
      <StyledText className="text-lg font-bold">{title}</StyledText>
      <TouchableOpacity
        onPress={() => navigation.navigate("LihatSemuaJadwalKelas", { category })}
      >
        <StyledText className="text-blue-500 text-sm font-semibold">
          Lihat Semua
        </StyledText>
      </TouchableOpacity>
    </StyledView>
    <FlatList
      data={data.filter((item) => item.category === category)}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-2"
    />
  </StyledView>
);

const JadwalSemua = () => {
  const navigation = useNavigation();

  return (
    <StyledView className="flex-1 bg-primary">
      {/* Header */}
      <StyledView className="h-48">
        <StyledView className="flex-1 flex-row items-center justify-between px-14">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft className="text-white" />
          </TouchableOpacity>
          <StyledText className="text-xl text-white font-bold">
            Jadwal Mapel
          </StyledText>
          <StyledView className="w-6" />
        </StyledView>
      </StyledView>

      {/* Content */}
      <StyledView className="flex-1 bg-white rounded-t-2xl px-6">
        {/* Search Bar */}
        <StyledView className="relative mt-10 mx-6">
          <Search className="absolute top-2 left-3 text-gray-400" />
          <StyledTextInput
            className="border border-gray-300 rounded-full pl-10 py-2 text-gray-600 text-base"
            placeholder="Cari"
          />
        </StyledView>

        {/* Kategori Kelas */}
        {renderSection("Kelas 13", "XIII", navigation)}
        {renderSection("Kelas 12", "XII", navigation)}
        {renderSection("Kelas 11", "XI", navigation)}
        {renderSection("Kelas 10", "X", navigation)}
      </StyledView>
    </StyledView>
  );
};

export default JadwalSemua;
