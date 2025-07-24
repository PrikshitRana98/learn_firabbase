import React from "react";
import NavigationString from "./NavigationString";
import * as Screens from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
// import TabRoutes from './TabRoutes';

const Stack = createStackNavigator(); 

export default function AuthSatck () {
    return (
       <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationString.Login} component={Screens.Login} />
            <Stack.Screen name={NavigationString.SignUp} component={Screens.SignUp} />
          
            <Stack.Screen name={NavigationString.Initial} component={Screens.Initial} />
            
        </Stack.Navigator>
    );
}