import AddScreen from './screen/AddScreen';
import React, { useEffect, useState } from 'react';
import RecordStack from './screen/RecordStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("fitness.db");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator presentation="modal" headerShown= 'false' >
        <Stack.Screen 
        name="Fitness" 
        component={RecordStack} 
        options={{ headerShown: false }} />
      <Stack.Screen name="Add Record" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
