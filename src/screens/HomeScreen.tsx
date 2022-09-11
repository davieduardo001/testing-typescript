import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"


export default function App() {

    interface User {
        name: String,
        baseEnthusiasmLevel: Number,
    }

    const user: User = {
        name: 'Jorg',
        baseEnthusiasmLevel: 0
    }

    const [enthusiasmLevel, setEnthusiasmLevel] = useState(0)

    return(
        <View style={styles.container}>
           <Text style={styles.text}>{user.name}</Text> 
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