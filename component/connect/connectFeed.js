import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseNews from '../menu/exerciseNews';
import FoodNews from '../menu/FoodNews';
import Feed from '../menu/feed';
import showExerciseNews from '../menu/showdataExerciseNews';
import showHealthFoodNews from '../menu/showdataHealthFoodNews';
import slideExercise from '../menu/feedNewsExerSlide';


const Stack = createStackNavigator();

export default function ConnectFeed() {

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#3D3D3D" translucent={true} />
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Stack.Screen name="ExerciseNews" component={ExerciseNews} options={{ headerShown: false }} />
        <Stack.Screen name="FoodNews" component={FoodNews} options={{ headerShown: false }} />
        <Stack.Screen name="showExerciseNews" component={showExerciseNews} options={{ headerShown: false }} />
        <Stack.Screen name="showHealthFoodNews" component={showHealthFoodNews} options={{ headerShown: false }} />
        <Stack.Screen name="slideExercise" component={slideExercise} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
}