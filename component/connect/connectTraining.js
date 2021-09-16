import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendedExercise from '../menu/RecommendedExercise';
import Training from '../menu/training';
import ManageExercise from '../menu/manageExercise';
import PageRCMExercise from '../menu/PageRCMExercise';

const Stacknoti = createBottomTabNavigator();

export default function ConnectTraining() {

  return (
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Training" component={Training} />
      <Stacknoti.Screen name="RecommendedExercise" component={RecommendedExercise} />
      <Stacknoti.Screen name="ManageExercise" component={ManageExercise} />
      <Stacknoti.Screen name="PageRCMExercise" component={PageRCMExercise} />
    </Stacknoti.Navigator>
  );
} 