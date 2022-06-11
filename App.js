import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';

function FitnessScreen(){
  return <View style={styles.container}>
    <Text>Fitness Statistics</Text>
    </View>
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Fitness" 
        component={FitnessScreen} 
        options={{
          title:"Fitness Statistics",
          headerTitleStyle:{
            fontWeight:"bold",
            fontSize:24,
          },
          headerStyle:{
            backgroundColor:"orange",
            height:120,
            borderBottomColor:"#999",
            borderBottomWidth:2,
          },
        }
         }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
