import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import CustomStyles from "../../components/CustomStyles";
import BtnWithIcon from "../../components/BtnWithIcon";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function HomeScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
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
          btnPress={() => {
            navigation.navigate("AddBookingScreen", {
              title: "Add Booking",
            });
          }}
        />
        <BtnWithIcon
          btnIcon={<AntDesign name="calendar" size={27} color={Colors.GRAY} />}
          btnTitle="View All Bookings"
          btnPress={() => {
            navigation.navigate("ViewAllBookingsScreen", {
              title: "View All Bookings",
            });
          }}
        />
        <BtnWithIcon
          btnIcon={
            <FontAwesome5 name="address-card" size={27} color={Colors.GRAY} />
          }
          btnTitle="Staff Holidays"
          btnPress={() => {
            navigation.navigate("StaffHolidaysScreen", {
              title: "Staff Holidays",
            });
          }}
        />
        <BtnWithIcon
          btnIcon={
            <MaterialCommunityIcons
              name="chart-timeline"
              size={27}
              color={Colors.GRAY}
            />
          }
          btnTitle="Amend Time Slots"
          btnPress={() => {
            navigation.navigate("AmendTimeSlotsScreen", {
              title: "Amend Time Slots",
            });
          }}
        />
        <BtnWithIcon
          btnIcon={
            <MaterialCommunityIcons
              name="table-key"
              size={27}
              color={Colors.GRAY}
            />
          }
          btnTitle="Key Dates"
          btnPress={() => {
            navigation.navigate("KeyDatesScreen", {
              title: "Key Dates",
            });
          }}
        />
        <BtnWithIcon
          btnIcon={<Octicons name="law" size={27} color={Colors.GRAY} />}
          btnTitle="Hearing Dates"
          btnPress={() => {
            navigation.navigate("HearingDatesScreen", {
              title: "Hearing Dates",
            });
          }}
        />
        <BtnWithIcon
          btnIcon={
            <MaterialIcons name="logout" size={27} color={Colors.GRAY} />
          }
          btnTitle="User Logout"
          btnPress={() => {
            navigation.navigate("LoginScreen");
          }}
        />
      </View>
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
