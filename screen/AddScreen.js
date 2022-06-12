import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function AddScreen ({ navigation }) {
    const [text, setText] = useState("PushUp");
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Add Your New Record!</Text>
        <TextInput 
            value={text}
            onChangeText={(newText) => setText(newText)}
        />
        <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={{ padding: 10}} 
        >
         <Text style={{ color: "orange" }}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    );
  }