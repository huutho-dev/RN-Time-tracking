import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimeForm from './TimerForm';
import TimeButton from './TimerButton';

export default function ToggleableTimeForm({ isOpen }) {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimeForm /> : <TimeButton color="black" title="+" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
