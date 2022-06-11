import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function FitnessScreen({ navigation }){

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
         style={{ 
           padding: 10, 
           borderBottomColor:"#ccc", 
           borderBottomWidth: 1,
           paddingTop: 20,
           paddingBottom: 20,
           }}>
         <Text style={{ fontSize: 16, textAlign:'left' }}>{item.title}</Text>
       </View>
      );
    }
    return (
      <View style={styles.container}>
      <FlatList
        data={record}
        renderItem={renderItem}
        style={{ width:"100%"}}
      />
      </View>
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