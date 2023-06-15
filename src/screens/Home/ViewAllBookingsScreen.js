import { SafeAreaView, View, Text, Image } from "react-native";
import CustomStyles from "../../Components/CustomStyles";
import { useNavigation } from "@react-navigation/native";

export default function ViewAllBookingsScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <Text>View All Bookings</Text>
      </View>
    </SafeAreaView>
  );
}
