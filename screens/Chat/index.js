import React from "react";
import { View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { MainView } from "../../components/layouts/View";
import { TextLayout as Text } from "../../components/layouts/Text";

import { primary } from "../../constants/colors";

import styles from "./styles";

const Heart = () => <EvilIcons name="heart" size={33} color={primary} />;
const Profile = () => <EvilIcons name="user" size={33} color={primary} />;
const Chat = () => (
  <Ionicons name="ios-chatbubbles" size={24} color={primary} />
);

const index = () => {
  return (
    <MainView title="Chat">
      {/* <View style={styles.tittle}>
        <Text>about</Text>
      </View> */}
      <View style={styles.iconsMenu}>
        {/* <Heart />
        <Chat />
        <Profile /> */}
      </View>
    </MainView>
  );
};

export default index;
