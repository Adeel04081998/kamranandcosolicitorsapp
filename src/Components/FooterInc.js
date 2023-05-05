import { View, Text } from "react-native"

export default function FooterInc() {
  return (
    <View>
      <Text style={{ color: Colors.WHITE, textAlign: "center", paddingVertical: 10 }}>
        © Kamran & Parners Ltd. {new Date().getFullYear()}
      </Text>
    </View>
  )
}