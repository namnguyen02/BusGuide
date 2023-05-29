import {Home} from '@/Screens/Home/Home'
import HeaderNav from "@/Components/HeaderNav";
import { Notification } from "@/Screens/Notification";


import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={({navigation, route}) => ({
          headerTitle: () => <HeaderNav navigation={navigation} back={route.name==='Home'? false:true}/>,
        headerStyle: {backgroundColor: '#FFCE48'},
        headerBackVisible: false,

        //   headerShown: false,
        })}
        // {{
        //   // headerLeft: () => <BackNav/>,
        //   headerTitle: () => <HeaderNav/>,
        //   headerBackVisible: false,
        // }}
        >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Notification" component={Notification}/>
      </Stack.Navigator>
  );
};