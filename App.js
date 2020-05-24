import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";
import { EvilIcons } from "@expo/vector-icons";

import { Settings, Suggest, Chat, Menu } from "./screens";

import { primary, elegantBlack } from "./constants/colors";

const Tab = createBottomTabNavigator();

const Icon = ({ name, color, size }) => (
  <EvilIcons name={name} size={size} color={color} />
);

const getFonts = () => {
  return Fonts.loadAsync({
    "play-fair-italic": require("./assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    "play-fair-bold": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "play-fair-regular": require("./assets/fonts/SpaceMono-Regular.ttf"),
  });
};

const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Menu")
            return <Icon name={`navicon`} size={size} color={color} />;
          else if (route.name === "Chat")
            return <Icon name={`comment`} size={size} color={color} />;
          else if (route.name === "Suggest")
            return <Icon name={`user`} size={size} color={color} />;
          else if (route.name === "Settings")
            return <Icon name={`gear`} size={size} color={color} />;
          else return <Icon name={`comment`} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: elegantBlack,
      }}
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Suggest" component={Suggest} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default () => {
  const [fontsLoader, setFontsLoaded] = useState(false);

  if (fontsLoader)
    return (
      <>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <Navigator />
      </>
    );
  else
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
};
