import { SafeAreaView, View, Text, Image } from "react-native";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Styles from "../Components/Styles";
import BtnSecondary from "../Components/BtnSecondary";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function AddBooking(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <Header title={props.route.params.title} />
      <View style={Styles.contentAreaContainer}>
        <Text>Amend Time</Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
}
