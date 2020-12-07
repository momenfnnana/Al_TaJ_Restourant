// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { theme, Box, Text } from "./src/components/Theme";
import { ThemeProvider } from "@shopify/restyle";
import { OnboardingNavigator } from "./src/screens/Authentication/Onboarding";
import { HomeNavigator } from "./src/screens/Home/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "./src/components/Navigation";

// import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [loaded] = Font.useFonts({
    Bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    BoldItalic: require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
    Italic: require("./assets/fonts/Ubuntu-Italic.ttf"),
    Light: require("./assets/fonts/Ubuntu-Light.ttf"),
    LightItalic: require("./assets/fonts/Ubuntu-LightItalic.ttf"),
    Medium: require("./assets/fonts/Ubuntu-Medium.ttf"),
    MediumItalic: require("./assets/fonts/Ubuntu-MediumItalic.ttf"),
    Regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    din: require("./assets/fonts/din-next-lt-w23-medium.ttf"),
    dinRegular: require("./assets/fonts/DIN-Next-W01-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const AppStack = createStackNavigator<AppRoutes>();

  return (
    <ThemeProvider {...{ theme }}>
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Authentication" headerMode="none">
          <AppStack.Screen
            name="Authentication"
            component={OnboardingNavigator}
          />
          <AppStack.Screen
            name="Home"
            component={HomeNavigator}
          />
        </AppStack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
