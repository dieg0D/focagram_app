import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
          title: false,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTransparent: true,
          title: false,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
        options={{
          headerTransparent: true,
          title: false,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
