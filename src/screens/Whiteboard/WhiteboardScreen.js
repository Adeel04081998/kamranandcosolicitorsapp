import { SafeAreaView, View, Text, Image } from "react-native";
import CustomStyles from "../../components/CustomStyles";
import { useNavigation } from "@react-navigation/native";

export default function WhiteboardScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <Text>Whiteboard</Text>
      </View>
    </SafeAreaView>
  );
}
