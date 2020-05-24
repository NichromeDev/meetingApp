import React from "react";
import { ImageBackground, View } from "react-native";

import { TextLayout as Text } from "../layouts/Text";
//import { ViewHeader as View } from "../layouts/View";

import styles from "./styles";

export default ({ tittle }) => (
  <View style={styles.header}>
    <ImageBackground
      source={require("../../assets/images/header_2.png")}
      style={styles.headerImage}
    >
      <Text style={styles.text}>{tittle}</Text>
    </ImageBackground>
  </View>
);
