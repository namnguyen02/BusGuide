import { TicketOverview } from "@/Screens/Ticket/Overview";
import { TicketPay } from "@/Screens/Ticket/Pay";
import { TicketYourTicket } from "@/Screens/Ticket/YourTicket";
import { Notification } from "@/Screens/Notification";
import HeaderNav from "@/Components/HeaderNav";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const TicketStack = () => {
  return (
      <Stack.Navigator
      initialRouteName="TicketStack"

      screenOptions={({navigation, route}) => ({
        headerTitle: () => <HeaderNav navigation={navigation} back={route.name==='Overview'? false:true}/>,
        headerBackVisible: false,
        // headerStyle: {backgroundColor: '#FFCE48'},

      })}>
        <Stack.Screen name="Overview" component={TicketOverview}/>
        <Stack.Screen name="Pay" component={TicketPay}/>
        <Stack.Screen name="YourTicket" component={TicketYourTicket}/>



      </Stack.Navigator>
  );
};