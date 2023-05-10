import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      
      
      <Tab.Screen
        name="Feed"
        component={HomeContainer}
        options={{
          tabBarLabel: 'Tra cứu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-outline" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Vé của tôi"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Trang của tôi"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
         
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
};
