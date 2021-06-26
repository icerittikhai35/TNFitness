import React from 'react';
import { StatusBar, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import ConnectTraining from '../connect/connectTraining';
import ConnectFeed from '../connect/connectFeed';

const InformationScreen = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
     
      
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let imagepath;

            if (route.name === 'Feed') {
              imagepath = focused ? require('../../img/home1.png') : require('../../img/home.png')
            } else if (route.name === 'Training') {
              imagepath = focused ? require('../../img/dumbbell.png') : require('../../img/dumbbell1.png');
            } else if (route.name === 'Profile') {
              imagepath = focused ? require('../../img/pie-chart1.png') : require('../../img/pie-chart.png')
            }

            // You can return any component that you like here!
            return <Image
              style={{ width: 35, height: 35 }}
              source={imagepath}
            />;
          },
        })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            activeTintColor: '#69BD51',
            inactiveTintColor: '#525152',
            showLabel: true,
            
            style: {
              shadowColor: 'rgba(58,55,55,0.1)',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 20,
              shadowRadius: 15,
              elevation: 3,
              position:'absolute',
              borderTopColor: 'transparent',
              backgroundColor: '#292B2D',
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              height: '9%',
              paddingBottom: '3%'
            }
          }}>
          <Tab.Screen name="Feed" component={ConnectFeed} />
          <Tab.Screen name="Training" component={ConnectTraining} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      
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

export default InformationScreen;