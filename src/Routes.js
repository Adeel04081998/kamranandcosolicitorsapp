import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import AddBooking from "./Screens/AddBooking";
import ViewAllBookings from "./Screens/ViewAllBookings";
import StaffHolidays from "./Screens/StaffHolidays";
import AmendTimeSlots from "./Screens/AmendTimeSlots";
import KeyDates from "./Screens/KeyDates";
import HearingDates from "./Screens/HearingDates";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddBooking" component={AddBooking} />
        <Stack.Screen name="ViewAllBookings" component={ViewAllBookings} />
        <Stack.Screen name="StaffHolidays" component={StaffHolidays} />
        <Stack.Screen name="AmendTimeSlots" component={AmendTimeSlots} />
        <Stack.Screen name="KeyDates" component={KeyDates} />
        <Stack.Screen name="HearingDates" component={HearingDates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
