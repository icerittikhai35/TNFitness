import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfile from '../menu/EditProfile';
import Profile from '../menu/profile';

const Stack = createBottomTabNavigator();

export default function ConnectProfile() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
}