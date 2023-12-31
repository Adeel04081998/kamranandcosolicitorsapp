import { SafeAreaView, View, Text, Image } from "react-native";
import CustomStyles from "../../Components/CustomStyles";
import { useNavigation } from "@react-navigation/native";

export default function WhiteboardScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <View style={{ alignItems: "center" }}>
          <Text>Whiteboard</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
