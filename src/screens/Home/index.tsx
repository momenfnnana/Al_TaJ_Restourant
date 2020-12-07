import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { enableScreens } from "react-native-screens";
import { HomeRoutes } from "../../components/Navigation";
import Home from "./Home";
enableScreens();
const Stack = createSharedElementStackNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeMain" component={Home} />
    </Stack.Navigator>
  );
};
