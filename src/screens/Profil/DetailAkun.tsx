import { ChevronLeft, MapPin } from "lucide-react-native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const DetailAkun = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primary">
          <View className="h-48">
            <View className="flex-1 flex-row items-center justify-between px-14">
              <ChevronLeft
                className="text-white"
                onPress={() => navigation.goBack()}
              />
              <Text className="text-xl text-white font-bold">Detail Akun</Text>
              <Text className="w-6" />
            </View>
          </View>
          <View className="flex-1 bg-white rounded-t-2xl px-14">
            
          </View>
        </View>
  )
}

export default DetailAkun