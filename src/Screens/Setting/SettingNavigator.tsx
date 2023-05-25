import { SettingScreen } from "./SettingScreen";
import { StartScreenScreen } from "./StartScreenScreen";
import { FavoriteAddressScreen } from "./FavoriteAddressScreen";
import { PaymentScreen } from "./PaymentScreen";
import { PermissionScreen } from "./PermissionScreen";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  return (
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen name="Setting" component={SettingScreen}/>
        <Stack.Screen name="StartScreen" component={StartScreenScreen} />
        <Stack.Screen name="FavoriteAddress" component={FavoriteAddressScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Permission" component={PermissionScreen} />
      </Stack.Navigator>
  );
};