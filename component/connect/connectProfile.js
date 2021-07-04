import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import  EditProfile from '../menu/EditProfile';
import Profile from '../menu/profile';
import Setting from '../menu/setting';


const Stacknoti = createStackNavigator();

export default function ConnectFeed() {

  return (
    <>
     <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#3D3D3D" translucent={false} />
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Profile" component={Profile} options={{headerShown : false}}/>
      <Stacknoti.Screen name="EditProfile" component={EditProfile} options={{headerShown : false}}/>
      <Stacknoti.Screen name="Setting" component={Setting} options={{headerShown : false}}/>
    </Stacknoti.Navigator>
    </>
  );
} 