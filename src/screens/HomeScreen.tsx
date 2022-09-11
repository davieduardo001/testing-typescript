import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default function App() {
  return(
    <View style={styles.container}>
       <Text style={styles.text}>TEST</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        color: '#fff'
    }
})