import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import AppBar from './src/components/AppBar';
import BottomBar from './src/components/BottomBar';
import ListView from './src/components/ListView';

export default function App() {
  return (
    <>
    <StatusBar 
    backgroundColor={styles.statusBar.backgroundColor}/>
    <BottomBar/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#f7f7f7'
  },
  statusBar:{
    backgroundColor:'#304FFE'
  }
});
