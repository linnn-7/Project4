import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';
import { FontAwesome5 } from '@expo/vector-icons';


const db = SQLite.openDatabase("fitness.db");

function FitnessScreen({ navigation }){
  const [record, setRecord] = useState(
    [
      { title:"Push-Up Score is 5", done: false, id: "0"},
    ]
  );

function addRecord(){
   let newRecord = {
     title: "Sample new record",
     done: false,
     id: record.length.toString(),
   };
   setRecord([...record, newRecord]);
}

  useEffect(() => {
    navigation.setOptions({
      headerRight:() => (
        <TouchableOpacity 
        onPress={addRecord}>
          <FontAwesome5 name="running" size={24} color="black" style={{ marginRight:17}}/>
        </TouchableOpacity>
      )})
  })
  function renderItem({ item }) {
    return (
     <View 
       style={{ padding: 10, borderBottomColor:"#ccc", borderBottomWidth: 1,}}>
       <Text style={{ fontSize: 16 }}>{item.title}</Text>
     </View>
    )
  }
  return <View style={styles.container}>
    <FlatList
      data={record}
      renderItem={renderItem}
      style={{ width:"100%"}}
    />
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
