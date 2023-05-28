import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { SettingStack } from "@/Screens/Setting";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileStack } from "@/Navigation/Profile";
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>


      <Tab.Screen
        name="Home"
        component={HomeContainer}
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
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={size} />
          ),

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
