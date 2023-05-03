import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function BtnWithIcon({ btnIcon, btnTitle, btnPress }) {
  return (
    <TouchableOpacity style={styles.btnPrimay} onPress={btnPress}>
      <View style={{ borderRightWidth: 1, borderRightColor: Colors.GRAY }}>
        <Text style={{ paddingHorizontal: 20 }}>{btnIcon}</Text>
      </View>
      <View>
        <Text style={styles.btnPrimaryText}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnPrimay: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: Colors.GOLD,
    paddingVertical: 10,
    marginVertical: 13,
    width: "90%",
  },
  btnPrimaryText: {
    color: Colors.GRAY,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    paddingLeft: 20,
  },
});
