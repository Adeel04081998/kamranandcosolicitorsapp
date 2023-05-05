import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Colors from "../utils/Colors"

export default function BtnPrimary({btnTitle, btnPress}) {
  return (
    <TouchableOpacity style={styles.btnPrimay} onPress={btnPress}>
      <Text style={styles.btnPrimaryText}>{btnTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnPrimay: {
    borderRadius: 6,
    backgroundColor: Colors.GOLD,
    padding: 10,
    marginVertical: 20,
  },
  btnPrimaryText: {
    color: Colors.GRAY,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingHorizontal: "10%",
  },
})