import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"}></ActivityIndicator>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {userToken == null ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </>
  );
}
