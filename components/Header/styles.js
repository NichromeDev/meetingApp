import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

import { borderColor } from "../../constants/colors";

console.log(borderColor);

export default StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    // borderColor: borderColor,
    // borderWidth: 1
  },
  headerImage: {
    width: Dimensions.get("screen").width,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    // borderBottomColor: 'red',
    // borderBottomWidth: 2
    // borderColor: borderColor,
    // borderWidth: 1
  },
  // text: {
  //   fontWeight: "800",
  // },
});
