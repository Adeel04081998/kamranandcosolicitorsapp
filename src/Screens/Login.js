import { View, Text, SafeAreaView, TextInput, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Footer from "../Components/Footer";
import Styles from "../Components/Styles";
import BtnPrimary from "../Components/BtnPrimary";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Login(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.headingWhite}>User Login</Text>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={Colors.LIGHTGRAY}
          keyboardType={"email-address"}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.LIGHTGRAY}
          style={styles.textInput}
          secureTextEntry={true}
        />
        <BtnPrimary
          btnTitle="Submit"
          btnPress={() => navigation.replace("Home")}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 2
  },
  logoImage: {
    width: "67%",
    resizeMode: "contain",
  },
  textInputContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },
  headingWhite: {
    color: Colors.WHITE,
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  textInput: {
    color: Colors.GRAY,
    borderWidth: 2,
    borderColor: Colors.GOLD,
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    width: "80%",
    padding: 10,
    paddingHorizontal: 14,
    marginVertical: 8,
    fontSize: 16,
  },
});
