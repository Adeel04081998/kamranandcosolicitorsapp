import { useContext, useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image } from "react-native";
import { StyleSheet } from "react-native";
import Footer from "../../Components/FooterInc";
import CustomStyles from "../../Components/CustomStyles";
import BtnPrimary from "../../Components/BtnPrimary";
import Colors from "../../Utils//Colors";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export default function LoginScreen(props) {
  const navigation = useNavigation();
  // Email: kejaz@kamranandcosolicitors.com
  // Pass: testing111
  const [emailAddress, setEmailAddress] = useState("kejaz@kamranandcosolicitors.com");
  const [userPassword, setUserPassword] = useState("testing111");

  const { login, loginErrorText } = useContext(AuthContext);

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.textInputContainer}>
        {loginErrorText ? (
          <Text style={CustomStyles.errorText}>{loginErrorText}</Text>
        ) : (
          null
        )}
        <Text style={styles.headingWhite}>User Login</Text>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={Colors.LIGHTGRAY}
          autoCapitalize="none"
          keyboardType={"email-address"}
          style={styles.textInput}
          value={emailAddress}
          onChangeText={(text) => setEmailAddress(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.LIGHTGRAY}
          autoCapitalize="none"
          style={styles.textInput}
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(text) => setUserPassword(text)}
        />
        <BtnPrimary
          btnTitle="Submit"
          btnPress={() => {
            login(emailAddress, userPassword);
          }}
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
    marginTop: 2,
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
