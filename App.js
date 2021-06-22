import React from 'react'
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'
RNCamera
export default function App() {
  const onSucess = (e) => {
    Linking.openURL(e.data).catch(err => {
      Alert.alert("Invalid code ", e.data)
    })
  }
  return (
    <View>
      <Text>QR Code Scanner</Text>
      <QRCodeScanner
        containerStyle={{ backgroundColor: "#fff", marginTop: "35%" }}
        onRead={onSucess}
        permissionDialogMessage="Need Permisson to access Camera"
        reactivate={true}
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{ borderColor: "#fff", borderRadius: 10 }}
        topContent={
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 20 }}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

