import { Profile } from "@/Screens/Profile/ProfileScreen";
import { Notification } from "@/Screens/Notification";
import HeaderNav from "@/Components/HeaderNav";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
      <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={({navigation, route}) => ({
        // headerTitle: () => <HeaderNav  navigation={route.name==='Setting'? false:navigation}/>,
        headerBackVisible: false,
      })}>
        <Stack.Screen name="Profile" component={Profile}/>
        {/* <Stack.Screen name="Notification" component={Notification}/> */}
      </Stack.Navigator>
  );
};