import { View, Text } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View>
      <Text style={{ color: Colors.WHITE, textAlign: "center", paddingVertical: 10 }}>
        © Kamran & Parners Ltd. {new Date().getFullYear()}
      </Text>
    </View>
  );
}
