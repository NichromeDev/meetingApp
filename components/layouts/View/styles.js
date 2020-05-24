import { StyleSheet } from "react-native";
import { lightPrimary } from "../../../constants/colors";

export default StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: lightPrimary,
  },
  viewHeader: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ccc"
  }
});
