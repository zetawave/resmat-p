import React, { Component } from 'react'
import AppBar from '../AppBar'
import ListView from '../ListView'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f7f7'
    },
    statusBar: {
        backgroundColor: '#304FFE'
    }
});

export default class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar />
                <ListView />
            </View>
        )
    }
}