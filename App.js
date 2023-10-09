import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Calculator from './src/Calculator';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';


const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  


  return (
    <SafeAreaView style={styles.container}>
      <Calculator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : statusBarHeight,
  },
});
