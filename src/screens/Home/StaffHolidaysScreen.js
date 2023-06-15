import { SafeAreaView, View, Text, Image } from "react-native";
import CustomStyles from "../../Components/CustomStyles";
import { useNavigation } from "@react-navigation/native";

export default function StaffHolidaysScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <Text>Staff Holidays</Text>
      </View>
    </SafeAreaView>
  );
}
