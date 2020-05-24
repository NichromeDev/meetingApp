import React, { useState } from "react";
import { View, SafeAreaView, ImageBackground } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

import { MainView } from "../../components/layouts/View";
import { TextLayout as Text } from "../../components/layouts/Text";

import { primary, elegantBlack, borderColor } from "../../constants/colors";

import styles from "./styles";

const Heart = () => <EvilIcons name="heart" size={33} color={elegantBlack} />;
const Profile = () => <EvilIcons name="user" size={33} color={elegantBlack} />;
const Chat = () => (
  <Ionicons name="ios-chatbubbles" size={24} color={elegantBlack} />
);

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]);

  const _renderItem = ({ item, index }) => (
    <View
      style={{
        // backgroundColor: "red",
        //borderRadius: 5,
        height: 250,
        //padding: 50,
        marginLeft: 25,
        marginRight: 25,
        // borderColor: borderColor,
        // borderWidth: 1,
      }}
    >
      <ImageBackground
        source={require("../../assets/images/image.jpg")}
        style={{
          // width: "100%",
          // height: "100%",
          borderRadius: 5,
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }}
      >
        <Text style={{ fontSize: 30 }}>girl 1</Text>
        <Text>{item.text}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <MainView title="Suggest">
      {/* <View style={styles.tittle}>
        <Text>Suggest</Text>
      </View> */}
      <View style={styles.iconsMenu}>
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Carousel
              layout={"default"}
              //ref={(ref) => (this.carousel = ref)}
              data={carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={_renderItem}
              onSnapToItem={(i) => setActiveIndex(i)}
            />
          </View>
        </SafeAreaView>
        {/* <Heart />
        <Chat />
        <Profile /> */}
      </View>
    </MainView>
  );
};
