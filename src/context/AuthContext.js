import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  function login() {
    setIsLoading(true);
    // axios.post(`${BASE_URL}/restapi`);
    setUserToken("testtoken");
    AsyncStorage.setItem("userToken", "testtoken");
    setIsLoading(false);
  }

  function logout() {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userTokenIsLoggedIn = await AsyncStorage.getItem("userToken");
      setUserToken(userTokenIsLoggedIn);
      setIsLoading(false);
    } catch (err) {
      console.log(`is logged in error ${err}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
}
