import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { enableScreens } from "react-native-screens";
import { AuthenticationRoutes } from "../../../components/Navigation";
import Onboarding from "./Onboarding";
import Login from "../Login";
import SignUp from "../SignUp";
// import Welcome, { assets as WelcomeAssets } from "./Welcome";
// import SignUp from "./SignUp";
// import ForgotPassword from "./ForgotPassword";
// import PasswordChanged from "./PasswordChanged";
// export const assets = [...OnBoardingAssets, ...WelcomeAssets];
enableScreens();
const Stack = createSharedElementStackNavigator<AuthenticationRoutes>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
