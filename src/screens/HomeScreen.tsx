import React, { useState } from "react"
import { View, StyleSheet, Text, Button } from "react-native"


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

    const onIncrement = () => {
        setEnthusiasmLevel(enthusiasmLevel + 1)
        console.log(enthusiasmLevel)
    }
    
    const onDecrement = () => {
        if (enthusiasmLevel > 0) {
            setEnthusiasmLevel( enthusiasmLevel - 1)
            console.log(enthusiasmLevel)
        } else {
            setEnthusiasmLevel(0)
            console.log(enthusiasmLevel)
        } 
    }

    const getExclamationMarks = (numChars: number) => {
        if (numChars > 0) {
            return Array(numChars + 1).join('!')
        } else {
            return ''
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{user.name}{getExclamationMarks(enthusiasmLevel)}</Text>
            <Button title='UP' onPress={onIncrement}/>
            <Button title='DOWN' onPress={onDecrement}/>
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
        color: '#fff',
        fontSize: 20
    },
})