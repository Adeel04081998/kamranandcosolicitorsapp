import { StyleSheet } from "react-native"
import Colors from "../Utils/Colors"


export default CustomStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.GRAY,
    flex: 1,
    justifyContent: "center",
  },
  mainButtonsContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
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
    // alignItems: "center",
    backgroundColor: Colors.LIGHTERGRAY,
    paddingVertical: '2%',
  },
  errorText: {
    color: Colors.PINK,
    fontSize: 20,
    paddingBottom: 10,
  },
})