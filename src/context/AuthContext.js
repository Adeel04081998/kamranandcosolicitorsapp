import { createContext, useEffect, useState } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";
import CustomStyles from "../Components/CustomStyles";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [loginErrorText, setLoginErrorText] = useState(null);

  function login(user_email, user_password) {
    setIsLoading(true);
    axios
      .post(BASE_URL, {
        email_address: user_email,
        login_password: user_password,
        action_type: "userlogin",
      })
      .then(function (response) {
        if (response.data.status == 200) {
          let userTokenData = response.data;
          setUserToken(userTokenData);
          AsyncStorage.setItem("userToken", JSON.stringify(userTokenData));
        } else {
          console.log(response.data);
          setLoginErrorText(<Text sytle={CustomStyles.errorText}>{response.data.message}</Text>);
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoginErrorText(<Text sytle={CustomStyles.errorText}>Backend Error!</Text>);
        setIsLoading(false);
      });

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
      userTokenIsLoggedIn = JSON.parse(userTokenIsLoggedIn);
      if (userTokenIsLoggedIn) {
        setUserToken(userTokenIsLoggedIn);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(`is logged in error ${err}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, loginErrorText }}
    >
      {children}
    </AuthContext.Provider>
  );
}
