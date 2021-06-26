import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfoUser from '../login/InfoUser';
import Login from '../login/InfoUser';

const Stacknoti = createBottomTabNavigator();

export default function ConnectTraining() {

  return (
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Login" component={Login} />
      <Stacknoti.Screen name="InfoUser" component={InfoUser} />
    </Stacknoti.Navigator>
  );
} 