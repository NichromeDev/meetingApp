import React from "react";
import {Text, View} from "react-native";
import styles from "./styles";

export const TextView = props => <View style={styles.view}><Text {...props} style={[props.style, styles.text]}>{props.children}</Text></View>
export const TextLayout = props => <Text {...props} style={[props.style, styles.textLayout]}>{props.children}</Text>