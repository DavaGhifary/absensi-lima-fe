import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./src/screens/onBoarding";
import LoginScreens from "./src/screens/Masuk";
// import Daftar from "./src/screens/Daftar";
import AwalScreen from "./src/screens/AwalScreen";
import LupaKataSandi from "./src/screens/LupaKataSandi";
import BottomNavbar from "./src/components/Navbar/BottomNavbar";
import Absen from "./src/screens/Absen";
import AjukanSakitIzin from "./src/screens/Ajukan/AjukanSakitIzin";
import ResultAjukan from "./src/screens/Ajukan/ResultAjukan";
import JadwalSemua from "./src/screens/Jadwal/JadwalSemua";
import LihatSemuaJadwalKelas from "./src/screens/Jadwal/LihatSemuaJadwalKelas";
import AbsenMaps from "./src/screens/Absen/AbsenMaps";
import AbsenSend from "./src/screens/Absen/AbsenSend";
import AbsenResult from "./src/screens/Absen/AbsenResult";
import RiwayatAbsen from "./src/screens/Riwayat/RiwayatAbsen";
import AlbumFotoSemua from "./src/screens/AlbumFoto/AlbumFotoSemua";
import AlbumDetail from "./src/screens/AlbumFoto/AlbumDetail";
import Pengumuman from "./src/screens/Pengumuman/Pengumuman";
import KontakGuru from "./src/screens/KontakGuru/KontakGuru";
import KontakDetail from "./src/screens/KontakGuru/KontakDetail";
import PengumumanDetail from "./src/screens/Pengumuman/PengumumanDetail";
import JadwalMapel from "./src/screens/Jadwal/JadwalMapel";
import BarangHilang from "./src/screens/BarangHilang/BarangHilang";
import DetailAkun from "./src/screens/Profil/DetailAkun";
import BerandaAdmin from "./src/screens/Admin/BerandaAdmin";
import AkunSiswa from "./src/screens/Admin/DataSiswa/AkunSiswa";
import RekapAbsen from "./src/screens/Admin/RekapAbsen/RekapAbsen";
import KonfirmasiIzinSakit from "./src/screens/Admin/KonfirmasiIzinSakit/KonfirmasiIzinSakit";
import ResultAbsenError from "./src/screens/Ajukan/ResultAbsenError";
const Stack = createStackNavigator();
import AsyncStorage from "@react-native-async-storage/async-storage";


const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = useState<null | boolean>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");
        if (hasLaunched === null) {
          // Pertama kali buka
          await AsyncStorage.setItem("hasLaunched", "true");
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstLaunch ? "Onboarding" : "Masuk"}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Masuk"
          component={LoginScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LupaKataSandi"
          component={LupaKataSandi}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Daftar"
          component={Daftar}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="AwalScreen"
          component={AwalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Beranda"
          component={BottomNavbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Absen"
          component={Absen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ajukan"
          component={AjukanSakitIzin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultAjukan"
          component={ResultAjukan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultAbsenError"
          component={ResultAbsenError}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JadwalSemua"
          component={JadwalSemua}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LihatSemuaJadwalKelas"
          component={LihatSemuaJadwalKelas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JadwalMapel"
          component={JadwalMapel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AbsenMaps"
          component={AbsenMaps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AbsenSend"
          component={AbsenSend}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AbsenResult"
          component={AbsenResult}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RiwayatAbsen"
          component={RiwayatAbsen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlbumFotoSemua"
          component={AlbumFotoSemua}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlbumDetail"
          component={AlbumDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pengumuman"
          component={Pengumuman}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PengumumanDetail"
          component={PengumumanDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KontakGuru"
          component={KontakGuru}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KontakDetail"
          component={KontakDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BarangHilang"
          component={BarangHilang}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailAkun"
          component={DetailAkun}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BerandaAdmin"
          component={BerandaAdmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AkunSiswa"
          component={AkunSiswa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RekapAbsen"
          component={RekapAbsen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KonfirmasiIzinSakit"
          component={KonfirmasiIzinSakit}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
