import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';
import { FontAwesome5 } from '@expo/vector-icons';

function FitnessScreen({ navigation }){
  useEffect(() => {
    navigation.setOptions({
      headerRight:() => (
        <TouchableOpacity 
        onPress={() => {
           console.log("New Record!");
        }}>
          <FontAwesome5 name="running" size={24} color="black" style={{ marginRight:17}}/>
        </TouchableOpacity>
      )})
  })
  return <View style={styles.container}>
    <Text>Push-Up Score</Text>
    <Text>Sit-Up Score</Text>
    <Text>2.4km Run Score</Text>
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
