import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Colors from "../Utils/Colors"


export default function BtnSecondary({btnTitle, btnPress}) {
  return (
    <TouchableOpacity style={styles.btnSecondary} onPress={btnPress}>
      <Text style={styles.btnSecondaryText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnSecondary: {
    borderRadius: 6,
    backgroundColor: Colors.LIGHTGRAY,
    padding: 10,
    marginTop: "5%",
    height: 40
  },
  btnSecondaryText: {
    color: Colors.GRAY,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingHorizontal: "3%",
  },
})