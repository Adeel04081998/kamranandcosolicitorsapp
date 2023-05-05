import { StyleSheet } from "react-native"
import Colors from "../utils/Colors"

export default CustomStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.GRAY,
    flex: 1,
    justifyContent: "center",
  },
  headerLogoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "3%",
  },
  headerLogoImagePressable: {
    width:"55%"
  },
  headerLogoImage: {
    width: "100%",
    resizeMode: "contain",
    marginTop: "10%",
  },
  contentAreaContainer: {
    flex: 6,
    backgroundColor: Colors.LIGHTERGRAY
  },
})