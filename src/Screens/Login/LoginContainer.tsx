// import React from "react";
// import { Login } from "./Login";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "@/Navigation";
// import { RootScreens } from "..";
// import {ForgotPasswordPhoneNumber} from "./ForgotPasswordPhoneNumber";
// import {ForgotPasswordSecurityCode} from "./ForgotPasswordSecurityCode";
// import {ForgotPasswordCreateNewPassword} from "./ForgotPasswordCreateNewPassword";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";



// type LoginNavigatorProps = NativeStackScreenProps<
//   RootStackParamList,
//   RootScreens.LOGIN
// >;
// const Stack = createNativeStackNavigator();
// // @refresh reset


// export const LoginContainer = ({
//   navigation,
// }: LoginNavigatorProps) => {
//   const onNavigate = (screen: RootScreens) => {
//     navigation.navigate(screen);
//   };

//   return (
//     <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="Login">
//               {props => <Login onNavigate={onNavigate} />}
//       </Stack.Screen>
//       <Stack.Screen
//         name="ForgotPasswordPhoneNumber">
//               {props => <ForgotPasswordPhoneNumber onNavigate={onNavigate} />}
//       </Stack.Screen>
      
//     </Stack.Navigator>
//   );
// };

