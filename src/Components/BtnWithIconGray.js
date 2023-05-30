import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import Colors from "../utils/Colors"

export default function BtnWithIcon({ btnIcon, btnTitle, btnPress }) {
  return (
    <TouchableOpacity style={styles.btnGray} onPress={btnPress}>
      <View style={{ borderRightWidth: 1, borderRightColor: Colors.WHITE }}>
        <Text style={{ paddingHorizontal: 20 }}>{btnIcon}</Text>
      </View>
      <View>
        <Text style={styles.btnGRAYText}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnGray: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: Colors.GRAY,
    paddingVertical: 10,
    marginVertical: 13,
    width: "90%",
  },
  btnGRAYText: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    paddingLeft: 20,
  },
})