import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Home, User } from "lucide-react-native"; // Import ikon dari Lucide
import Beranda from "../../screens/Beranda";
import Profil from "../../screens/Profil/Profil";

const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 64, // Ubah tinggi navbar
          backgroundColor: "#ffffff",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -3 },
          elevation: 5,
        },
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
              {focused && (
                <View className="w-10 h-1 bg-[#2061DC] absolute top-0" />
              )}
              <IconComponent
                size={28}
                color={focused ? "#2061DC" : "#2061DC60"}
                className="mt-6"
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavbar;
