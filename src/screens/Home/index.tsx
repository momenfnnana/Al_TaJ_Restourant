import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { enableScreens } from "react-native-screens";
import { HomeRoutes } from "../../components/Navigation";
import Home from "./Home";
import Parts from "./Parts";
enableScreens();
const Stack = createSharedElementStackNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="Parts" component={Parts} />
    </Stack.Navigator>
  );
};
