import { SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomStyles from "../../Components/CustomStyles";
import BtnWithIconGray from "../../Components/BtnWithIconGray";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SettingsScreen(props) {
  const navigation = useNavigation();

  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <View style={{ alignItems: "center" }}>
          <BtnWithIconGray
            btnIcon={
              <MaterialIcons name="logout" size={27} color={Colors.WHITE} />
            }
            btnTitle="User Logout"
            btnPress={() => {
              logout();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
