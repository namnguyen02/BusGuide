import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "../../Screens";
import {Register1} from "../../Screens/Register/Register1";
import {Register2} from "../../Screens/Register/Register2";
import {Register3} from "../../Screens/Register/Register3";
import {Register4} from "../../Screens/Register/Register4";
import {RegisterFinal} from "../../Screens/Register/RegisterFinal";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";




type RegisterNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.REGISTER
>;
export type StackParamList = {
  navigate: (screen?: string) => void;
  goBack: () => void;
  Register1: undefined;
  Register2: undefined;
  Register3: undefined;
  Register4: undefined;
  RegisterFinal: undefined;
};
const Stack = createNativeStackNavigator();
// @refresh reset


export const RegisterNavigator = ({
  navigation,
}: RegisterNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Register1">
            {(props) => <Register1 onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="Register2">
            {(props) => <Register2 onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="Register3">
            {(props) => <Register3 onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="Register4">
            {(props) => <Register4 onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="RegisterFinal">
            {(props) => <RegisterFinal onNavigate={onNavigate} />}
        </Stack.Screen>

    </Stack.Navigator>
  );
};

