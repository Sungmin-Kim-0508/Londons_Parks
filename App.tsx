import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputText from './components/atoms/Input';
import Typography from "./components/atoms/Typography"; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <InputText/>
      <Typography styleType="h1">
        Hello World! 
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
