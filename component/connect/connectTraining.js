import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendedExercise from '../menu/RecommendedExercise';
import Training from '../menu/training';

const Stacknoti = createBottomTabNavigator();

export default function ConnectTraining() {

  return (
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Training" component={Training} />
      <Stacknoti.Screen name="RecommendedExercise" component={RecommendedExercise} />
    </Stacknoti.Navigator>
  );
} 