import React from "react";
import { SplashScreen } from "./Splash";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type SplashScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.SPLASH
>;

export const SplashContainer = ({
  navigation,
}: SplashScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <SplashScreen onNavigate={onNavigate} />;
};