import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./src/screens/onBoarding";
import LoginScreens from "./src/screens/Masuk";
import Daftar from "./src/screens/Daftar";
import AwalScreen from "./src/screens/AwalScreen";
import LupaKataSandi from "./src/screens/LupaKataSandi";
import BottomNavbar from "./src/components/Navbar/BottomNavbar";
import Absen from "./src/screens/Absen";
import AjukanSakitIzin from "./src/screens/Ajukan/AjukanSakitIzin";
import ResultAjukan from "./src/screens/Ajukan/ResultAjukan";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Masuk" component={LoginScreens} options={{ headerShown: false }} />
        <Stack.Screen name="LupaKataSandi" component={LupaKataSandi} options={{ headerShown: false }} />
        <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: false }} />
        <Stack.Screen name="AwalScreen" component={AwalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Beranda" component={BottomNavbar} options={{ headerShown: false }} />
        <Stack.Screen name="Absen" component={Absen} options={{ headerShown: false }} />
        <Stack.Screen name="Ajukan" component={AjukanSakitIzin} options={{ headerShown: false }} />
        <Stack.Screen name="ResultAjukan" component={ResultAjukan} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
