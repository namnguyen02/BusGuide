import { SettingScreen } from "./SettingScreen";
import { StartScreenScreen } from "./StartScreenScreen";
import { FavoriteAddressScreen } from "./FavoriteAddressScreen";
import { PaymentScreen } from "./PaymentScreen";
import { PermissionScreen } from "./PermissionScreen";
import { NewsScreen } from "./NewsScreen";
import { AboutAppScreen } from "./AboutAppScreen";
import { PrivacyScreen } from "./PrivacyScreen";
import { IntroductionScreen } from "./IntroductionScreen";
import HeaderNav from "@/Components/HeaderNav";
import { Notification } from "@/Screens/Notification";


import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="SettingStack"
        screenOptions={({navigation, route}) => ({
          headerTitle: () => <HeaderNav navigation={navigation} back={route.name==='Setting'? false:true}/>,
          headerBackVisible: false,
        })}
        // {{
        //   // headerLeft: () => <BackNav/>,
        //   headerTitle: () => <HeaderNav/>,
        //   headerBackVisible: false,
        // }}
        >
        <Stack.Screen name="Setting" component={SettingScreen}/>
        <Stack.Screen name="StartScreen" component={StartScreenScreen}/>
        <Stack.Screen name="FavoriteAddress" component={FavoriteAddressScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Permission" component={PermissionScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="AboutApp" component={AboutAppScreen} />
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
  );
};