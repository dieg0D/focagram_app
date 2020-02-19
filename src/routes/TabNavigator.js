import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import EditPassword from '../pages/EditPassword';
import EditProfile from '../pages/EditProfile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColoreColor: '#3897f0',
        inactiveTintColor: 'rgba(0, 0, 0, 0.7)',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarVisible:
            route?.state?.routes[route?.state?.index]?.name === 'Post'
              ? false
              : true,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EditPassword"
        component={EditPassword}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="lock" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="create" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
