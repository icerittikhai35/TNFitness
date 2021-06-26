import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseNews from '../menu/exerciseNews';
import FoodNews from '../menu/FoodNews';
import Feed from '../menu/feed';


const Stacknoti = createStackNavigator();

export default function ConnectFeed() {

  return (
    <>
     <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#3D3D3D" translucent={false} />
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Feed" component={Feed} options={{headerShown : false}}/>
      <Stacknoti.Screen name="ExerciseNews" component={ExerciseNews} options={{headerShown : false}}/>
      <Stacknoti.Screen name="FoodNews" component={FoodNews} options={{headerShown : false}}/>
    </Stacknoti.Navigator>
    </>
  );
} 