import { MyPage } from "@/Screens/Profile";
import { Profile } from "@/Screens/Profile/ProfileScreen";
import { Notification } from "@/Screens/Notification";
import HeaderNav from "@/Components/HeaderNav";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
      <Stack.Navigator
      initialRouteName="ProfileStack"

      screenOptions={({navigation, route}) => ({
        headerTitle: () => <HeaderNav navigation={navigation} back={route.name==='MyPage'? false:true}/>,
        headerStyle: {backgroundColor: '#FFCE48'},
        headerBackVisible: false,
      })}>
        <Stack.Screen name="MyPage" component={MyPage}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Notification" component={Notification}/>
      </Stack.Navigator>
  );
};