import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { LoginNavigator } from "./Login";
import { RegisterNavigator } from "./Register";
import { WelcomeContainer } from "@/Screens/Welcome";
import { SplashContainer } from "../Screens/Splash";
import { RootScreens } from "@/Screens";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.SPLASH]: undefined;
  [RootScreens.REGISTER]: undefined;
  [RootScreens.LOGIN]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.SPLASH}
          component={SplashContainer}
        />
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginNavigator}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
        />

        <RootStack.Screen
          name={RootScreens.REGISTER}
          component={RegisterNavigator}
        />



      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
