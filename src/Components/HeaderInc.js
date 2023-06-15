import { Text, View, Image, Pressable } from "react-native";
import CustomStyles from "./CustomStyles";
import Colors from "../Utils/Colors"
;
import BtnSecondary from "./BtnSecondary";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function HeaderInc({ title }) {
  const navigation = useNavigation();

  return (
    <>
      <View style={CustomStyles.headerLogoContainer}>
        <Pressable
          onPress={() => navigation.replace("Home")}
          style={CustomStyles.headerLogoImagePressable}
        >
          <Image
            source={require("../assets/logo.png")}
            style={CustomStyles.headerLogoImage}
          />
        </Pressable>
        <BtnSecondary
          btnTitle="Back"
          btnPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          paddingVertical: 10,
          backgroundColor: Colors.DARKGOLD
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: Colors.WHITE,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Text>
      </View>
    </>
  );
}
