// services/api.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


// Ganti IP ini dengan IP lokal komputer kamu
const baseURL = 'http://192.168.1.14:8000/api';

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('auth_token');
    console.log('Token diinterceptor:', token); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// =======================
// Lokasi Absen
// =======================
export interface LokasiAbsen {
  id: number;
  latitude: number;
  longitude: number;
  radius: number;
}

export const getActiveLokasi = async (): Promise<LokasiAbsen> => {
  try {
    const response = await api.get('/lokasi-absensi/active');
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil lokasi aktif:', error);
    throw error;
  }
};

// =======================
// Logout
// =======================
export const logoutUser = async (): Promise<any> => {
  try {
    const response = await api.post('/logout');
    return response.data;
  } catch (error) {
    console.error('Gagal logout:', error);
    throw error;
  }
};

// =======================
// Ajukan Izin / Sakit
// =======================

interface IzinSakitPayload {
  jenis: 'Izin' | 'Sakit';
  keterangan: string;
  surat_sakit?: string; // hanya untuk sakit
  latitude?: number;
  longitude?: number;
}

export const ajukanIzinSakit = async (payload: IzinSakitPayload): Promise<any> => {
  try {
    const { jenis, keterangan, surat_sakit, latitude, longitude } = payload;

    const formData = new FormData();
    formData.append("status", jenis.toLowerCase());
    formData.append("keterangan", keterangan);

    if (jenis === 'Sakit' && surat_sakit) {
      formData.append("surat_sakit", {
        uri: surat_sakit,
        name: surat_sakit.split("/").pop() || "surat_sakit.jpg",
        type: "image/jpeg",
      } as any);
    }

    if (latitude && longitude) {
      formData.append("latitude", latitude.toString());
      formData.append("longitude", longitude.toString());
    }

    const response = await api.post("/absensi/masuk", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Gagal mengajukan izin/sakit:', error.response?.data || error.message);
    } else {
      console.error('Terjadi error yang tidak diketahui:', error);
    }
    throw error;
  }
  
};

