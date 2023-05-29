import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { HomeStack } from "@/Navigation/Home";
import { SettingStack } from "@/Screens/Setting";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileStack } from "@/Navigation/Profile";
import { TicketStack } from "@/Navigation/Ticket";
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>


      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{

            headerShown: false,

          tabBarLabel: 'Tra cứu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-outline" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name="Vé của tôi"
        component={TicketStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={size} />
          ),
        headerShown: false

        }}
      />
      <Tab.Screen
        name="Trang của tôi"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={SettingStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
            headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};
