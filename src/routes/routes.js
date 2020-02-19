import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';
import StackNavigator from './StackNavigator';

import TabNavigator from './TabNavigator';

const Routes = () => {
  const authcontext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authcontext.data === null ? <StackNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
};

export default Routes;
