import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendedExercise from '../menu/RecommendedExercise';
import Training from '../menu/training';
import ManageExercise from '../menu/manageExercise';
import PageRCMExercise from '../menu/PageRCMExercise';
import ShowManageExercise from '../menu/ShowManageExercise';
import ManageInsertExercise from '../menu/manageinsertexercise';

const Stacknoti = createBottomTabNavigator();

export default function ConnectTraining() {

  return (
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Training" component={Training} />
      <Stacknoti.Screen name="RecommendedExercise" component={RecommendedExercise} />
      <Stacknoti.Screen name="ManageExercise" component={ManageExercise} />
      <Stacknoti.Screen name="ShowManageExercise" component={ShowManageExercise} />
      <Stacknoti.Screen name="PageRCMExercise" component={PageRCMExercise} />
      <Stacknoti.Screen name="ManageInsertExercise" component={ManageInsertExercise} />
    </Stacknoti.Navigator>
  );
}