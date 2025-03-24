import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Home, User } from "lucide-react-native"; // Import ikon dari Lucide
import Beranda from "../../screens/Beranda";
import Profil from "../../screens/Profil";

const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: "rounded-t-2xl h-16 absolute bottom-2 left-2 right-2",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let IconComponent;

          if (route.name === "Beranda") {
            IconComponent = Home;
          } else if (route.name === "Profil") {
            IconComponent = User;
          }

          return (
            <View className="flex items-center justify-center">
              <IconComponent size={28} color={focused ? "#2061DC" : "#2061DC"} />
              {focused && <View className="w-2 h-2 bg-[#2061DC] rounded-full mt-1" />}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Beranda} options={{ headerShown: false }} />
      <Tab.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomNavbar;
