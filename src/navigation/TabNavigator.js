import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/Home/HomeScreen";
import AddBookingScreen from "../screens/Home/AddBookingScreen";
import ViewAllBookingsScreen from "../screens/Home/ViewAllBookingsScreen";
import StaffHolidaysScreen from "../screens/Home/StaffHolidaysScreen";
import AmendTimeSlotsScreen from "../screens/Home/AmendTimeSlotsScreen";
import KeyDatesScreen from "../screens/Home/KeyDatesScreen";
import HearingDatesScreen from "../screens/Home/HearingDatesScreen";

import WhiteboardScreen from "../screens/Whiteboard/WhiteboardScreen";
import NotificationsScreen from "../screens/Notification/NotificationsScreen";
import SettingsScreen from "../screens/Setting/SettingsScreen";
import Colors from "./../utils/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddBookingScreen"
        component={AddBookingScreen}
        options={{
          headerTintColor: Colors.WHITE,
          headerTitle: "Add Booking",
          headerBackTitleStyle: { color: Colors.GOLD },
          headerStyle: { backgroundColor: Colors.GRAY },
        }}
      />
      <Stack.Screen
        name="ViewAllBookingsScreen"
        component={ViewAllBookingsScreen}
        options={{
          headerTintColor: Colors.WHITE,
          headerTitle: "View All Bookings",
          headerBackTitleStyle: { color: Colors.GOLD },
          headerStyle: { backgroundColor: Colors.GRAY },
        }}
      />
      <Stack.Screen
        name="StaffHolidaysScreen"
        component={StaffHolidaysScreen}
        options={{
          headerTintColor: Colors.WHITE,
          headerTitle: "Staff Holidays",
          headerBackTitleStyle: { color: Colors.GOLD },
          headerStyle: { backgroundColor: Colors.GRAY },
        }}
      />
      <Stack.Screen
        name="AmendTimeSlotsScreen"
        component={AmendTimeSlotsScreen}
        options={{
          headerTintColor: Colors.WHITE,
          headerTitle: "Amend Time Slots",
          headerBackTitleStyle: { color: Colors.GOLD },
          headerStyle: { backgroundColor: Colors.GRAY },
        }}
      />
      <Stack.Screen
        name="KeyDatesScreen"
        component={KeyDatesScreen}
        options={{
          headerTintColor: Colors.WHITE,
          headerTitle: "Key Dates",
          headerBackTitleStyle: { color: Colors.GOLD },
          headerStyle: { backgroundColor: Colors.GRAY },
        }}
      />
      <Stack.Screen
        name="HearingDatesScreen"
        component={HearingDatesScreen}
        options={{
          headerTintColor: Colors.WHITE,
          headerTitle: "Hearing Dates",
          headerBackTitleStyle: { color: Colors.GOLD },
          headerStyle: { backgroundColor: Colors.GRAY },
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.GRAY,
        tabBarStyle: {
          paddingVertical: 5,
          backgroundColor: Colors.DARKGOLD,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          // tabBarStyle: {
          //   display: getTabBarVisibility(route),
          //   backgroundColor: Colors.DARKGOLD,
          // },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Whiteboard"
        component={WhiteboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="blackboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarBadge: 99,
          tabBarBadgeStyle: { backgroundColor: Colors.LIGHTERGRAY },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";

  console.log(routeName)

  if (
    routeName == "HomeScreen"
  ) {
    return "flex";
  }
  return "none";
}
