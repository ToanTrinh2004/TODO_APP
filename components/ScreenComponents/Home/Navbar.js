import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Form from './Form';

const Navbar = () => {

  return (
    <View style={styles.container}>
      <Header />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Navbar;
