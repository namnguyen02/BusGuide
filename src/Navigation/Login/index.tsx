import React from "react";
import { Login } from "../../Screens/Login/Login";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "../../Screens";
import {ForgotPasswordSecurityCode} from "../../Screens/Login/ForgotPasswordSecurityCode";
import {ForgotPasswordCreateNewPassword} from "../../Screens/Login/ForgotPasswordCreateNewPassword";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import {ForgotPasswordPhoneNumber} from "../../Screens/Login/ForgotPasswordPhoneNumber";




type LoginNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.LOGIN
>;
export type StackParamList = {
  navigate: (screen?: string) => void;
  goBack: () => void;
  LoginStack: undefined;
  LoginScreen: undefined;
  ForgotPasswordPhoneNumber: undefined;
  ForgotPasswordSecurityCode: undefined;
  ForgotPasswordCreateNewPassword: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();
// @refresh reset


export const LoginNavigator = ({
  navigation,
}: LoginNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return (
    <Stack.Navigator initialRouteName="LoginStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="LoginScreen">
            {(props) => <Login onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="ForgotPasswordPhoneNumber">
            {(props) => <ForgotPasswordPhoneNumber onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="ForgotPasswordSecurityCode">
            {(props) => <ForgotPasswordSecurityCode onNavigate={onNavigate} />}
        </Stack.Screen>
        <Stack.Screen
            name="ForgotPasswordCreateNewPassword">
            {(props) => <ForgotPasswordCreateNewPassword onNavigate={onNavigate} />}
        </Stack.Screen>

    </Stack.Navigator>
  );
};

