import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';


const Stack = createStackNavigator(); 

function Routes() {
  return (
    <NavigationContainer>

            {false?<MainStack/>:<AuthStack/>}


    </NavigationContainer>
  );
}

export default Routes;