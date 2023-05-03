import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Footer from "../Components/Footer";
import Styles from "../Components/Styles";
import BtnWithIcon from "../Components/BtnWithIcon";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Home(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={styles.topLogoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.topLogoImage}
        />
      </View>
      <View style={styles.mainButtonsContainer}>
        <BtnWithIcon
          btnIcon={<Entypo name="add-to-list" size={27} color={Colors.GRAY} />}
          btnTitle="Add Booking"
          btnPress={() => {navigation.navigate('AddBooking', {
            title: "Add Booking"
          })}}
        />
        <BtnWithIcon
          btnIcon={<AntDesign name="calendar" size={27} color={Colors.GRAY} />}
          btnTitle="View All Bookings"
          btnPress={() => {navigation.navigate('ViewAllBookings', {
            title: "View All Bookings"
          })}}
        />
        <BtnWithIcon
          btnIcon={<FontAwesome5 name="address-card" size={27} color={Colors.GRAY} />}
          btnTitle="Staff Holidays"
          btnPress={() => {navigation.navigate('StaffHolidays', {
            title: "Staff Holidays"
          })}}
        />
        <BtnWithIcon
          btnIcon={<MaterialCommunityIcons name="chart-timeline" size={27} color={Colors.GRAY} />}
          btnTitle="Amend Time Slots"
          btnPress={() => {navigation.navigate('AmendTimeSlots', {
            title: "Amend Time Slots"
          })}}
        />
        <BtnWithIcon
          btnIcon={<MaterialCommunityIcons name="table-key" size={27} color={Colors.GRAY} />}
          btnTitle="Key Dates"
          btnPress={() => {navigation.navigate('KeyDates', {
            title: "Key Dates"
          })}}
        />
        <BtnWithIcon
          btnIcon={<Octicons name="law" size={27} color={Colors.GRAY} />}
          btnTitle="Hearing Dates"
          btnPress={() => {navigation.navigate('HearingDates', {
            title: "Hearing Dates"
          })}}
        />
        <BtnWithIcon
          btnIcon={<MaterialIcons name="logout" size={27} color={Colors.GRAY} />}
          btnTitle="User Logout"
          btnPress={() => {navigation.replace('Login')}}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topLogoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
  },
  topLogoImage: {
    width: "67%",
    resizeMode: "contain",
  },
  mainButtonsContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },
});
