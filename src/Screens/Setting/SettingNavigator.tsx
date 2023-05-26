import { SettingScreen } from "./SettingScreen";
import { StartScreenScreen } from "./StartScreenScreen";
import { FavoriteAddressScreen } from "./FavoriteAddressScreen";
import { PaymentScreen } from "./PaymentScreen";
import { PermissionScreen } from "./PermissionScreen";
import { NewsScreen } from "./NewsScreen";
import { AboutAppScreen } from "./AboutAppScreen";
import { PrivacyScreen } from "./PrivacyScreen";

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
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="AboutApp" component={AboutAppScreen} />
      </Stack.Navigator>
  );
};