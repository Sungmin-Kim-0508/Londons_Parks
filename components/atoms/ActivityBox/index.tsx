import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function index() {
    const [activities, setActivities] = useState([
        { text: 'You can have BBQ party here', key:'1'},
        { text: 'You can leash-off your dog', key:'2'},
        { text: 'You can park for free', key:'3'},
        { text: 'You can let your children swim', key:'4'}
      ]);
      return (
        <View >
      
          
        </View>
    
        
      );
    }