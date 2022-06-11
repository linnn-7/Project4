import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FitnessScreen from './FitnessScreen';

const InnerStack = createStackNavigator();

export default function RecordStack(){
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
       name="Record"
       component={FitnessScreen}
       options={{
         headerTitle:"Records",
         headerTitleStyle: {
           fontWeight:"bold",
           fontSize:30,
         },
         headerStyle:{
           height:120,
           backgroundColor: "yellow",
           borderBottomColor:"#ccc",
           borderBottomWidth:1,
         }
       }
       }
       />
    </InnerStack.Navigator>
  )
}