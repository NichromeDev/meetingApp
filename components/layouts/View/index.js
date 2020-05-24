import React from "react";
import { View } from "react-native";

import { Header } from "../..";

import styles from "./styles";

export const MainView = (props) => (
  <View style={styles.view}>
    <Header tittle={props.title} />
    {props.children}
  </View>
);
export const ViewHeader = (props) => (
  <View style={[props.style, styles.viewHeader]}>{props.children}</View>
);
