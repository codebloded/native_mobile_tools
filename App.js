import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import QrCodeScreen from "./app/screens/QrCodeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <QrCodeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})