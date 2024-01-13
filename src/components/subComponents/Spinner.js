import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import strings from '../../Strings/Strings'

const styles = StyleSheet.create({
    container: {
        height: '80%',
        justifyContent: 'center'
    },
    spinner: {
        alignSelf: 'center',
        color: 'red'
    },
    text: {
        alignSelf: 'center',
        margin: 10
    }
})

export default function Spinner() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={48}
                color={styles.spinner.color}
                style={styles.spinner}
                animating={true} />
            <Text style={styles.text}>{strings.loading}</Text>
        </View>
    )
}