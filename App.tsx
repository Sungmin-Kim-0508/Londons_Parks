import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputText from './components/atoms/Input';
import Typography from './components/atoms/Typography';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Typography Color="black" Title="H1" isBold={true} isTimesNewRoman={true}>London Parks</Typography>
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
