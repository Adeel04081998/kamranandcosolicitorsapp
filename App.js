import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* <AuthStack /> */}
        <AppStack />
      </NavigationContainer>
    </>
  );
}
