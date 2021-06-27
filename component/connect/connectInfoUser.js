import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfoUser from '../login/InfoUser';
import Login from '../login/InfoUser';

const Stack = createStackNavigator();

export default function connectInfoUser() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="InfoUser" component={InfoUser} options={{headerShown : false}} />
    </Stack.Navigator>
  );
} 