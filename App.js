
import { StatusBar, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './component/login/login';
import Register from './component/login/register';
import InformationScreen from './component/menu/InformationScreen';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#3D3D3D" translucent={false} />

    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login} 
          options={{headerShown : false}}
          />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformationScreen"
          component={InformationScreen}
          options={{ headerShown: false }}
        />
       

       
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;