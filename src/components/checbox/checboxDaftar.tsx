import React from "react";
import { View, Text, Pressable } from "react-native";
import { Check } from "lucide-react-native";

const Checkbox = ({ checked, onPress }:any) => {
  return (
    <Pressable onPress={onPress} className="flex-row items-center space-x-2">
      <View
        className={`w-5 h-5 border-2 rounded-md flex items-center justify-center 
        ${checked ? "bg-primary border-primary" : "border-gray-200 bg-gray-100"}`}
      >
        {checked && <Check size={16} color="white" />}
      </View>
    </Pressable>
  );
};

export default Checkbox;
