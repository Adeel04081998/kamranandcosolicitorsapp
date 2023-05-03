import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import Styles from "./Styles";
import Colors from "../Utils/Colors";
import BtnSecondary from "./BtnSecondary";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <>
      <View style={Styles.headerLogoContainer}>
        <Pressable
          onPress={() => navigation.replace("Home")}
          style={Styles.headerLogoImagePressable}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={Styles.headerLogoImage}
          />
        </Pressable>
        <BtnSecondary
          btnTitle="Back"
          btnPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          paddingBottom: 10,
        }}
      >
        <AntDesign
          name="rightsquare"
          size={18}
          color={Colors.LIGHTGRAY}
          style={{ marginRight: 5, marginTop: 1 }}
        />
        <Text style={{ fontSize: 18, color: Colors.LIGHTERGRAY }}>{title}</Text>
      </View>
    </>
  );
}
