import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("fitness.db");

export default function FitnessScreen({ navigation, route }){

  const [record, setRecord] = useState([]);

  function refreshRecord() {
      db.transaction((tx) => {
          tx.executeSql(
              "SELECT * FROM record",
              null,
              (txObj, {rows: {_array }}) => setRecord(_array),
              (txObj, error) => console.log("Error", error)
          )
      })
  }

  useEffect(() => {
      db.transaction((tx) => {
          tx.executeSql(
              `CREATE TABLE IF NOT EXISTS
              record
              (id INTEGER PRIMARY KEY AUTOINCREMENT,
               title TEXT,
               done INT);`
          );
      }, null, refreshRecord);
  },[]
  );
  
  function addRecord(){
     navigation.navigate("Add Record");
  }

  function deleteRecord(id){
      db.transaction((tx)=>{
          tx.executeSql(`DELETE FROM record Where id=${id}`)
      },null,refreshRecord);
  }

  useEffect(() => {
      if (route.params?.text) {
          db.transaction((tx) => {
              tx.executeSql("INSERT INTO record (done, title) VALUES (0,?)",[route.params.text]);
          },null,refreshRecord)
      }
  }, [route.params?.text])
  
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
           flexDirection:"row",
           justifyContent:"space-between",
           }}>
         <Text style={{ fontSize: 16, textAlign:'left' }}>{item.title}</Text>
         <TouchableOpacity onPress={() => deleteRecord(item.id)}>
             <Ionicons
                 name="trash"
                 size={16}
                 color="#944" />
         </TouchableOpacity>
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