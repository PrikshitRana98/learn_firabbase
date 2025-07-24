import React from "react";
import NavigationString from "./NavigationString";
import * as Screens from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
// import TabRoutes from './TabRoutes';

const Stack = createStackNavigator(); 

export default function MainStack () {
    return (
       <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationString.CreatePost} component={Screens.CreatePost} />
            <Stack.Screen name={NavigationString.Home} component={Screens.Home} />
            <Stack.Screen name={NavigationString.Initial} component={Screens.Initial} />
            <Stack.Screen name={NavigationString.Profile} component={Screens.Profile} />
            <Stack.Screen name={NavigationString.Search} component={Screens.Search} />
            <Stack.Screen name={NavigationString.Notification} component={Screens.Notification} />
            
        </Stack.Navigator>
    );
}