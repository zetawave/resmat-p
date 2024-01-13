import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import strings from '../Strings/Strings'
import { SimpleInfoDialog, AboutDialog } from '../Shared/Dialogs';
const styles = StyleSheet.create({
    top: {
        right: 0,
        top: 0,
        left: 0,
        backgroundColor: '#304FFE',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    container: {
        backgroundColor:'#E1E8EE'
    }
});


export default class AppBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Appbar
                    style={styles.top}
                >
                    <Appbar.Content
                        title={strings.app_name}
                        subtitle={strings.subtitle_app_bar}
                    />
                    <SimpleInfoDialog
                        title={strings.infoDialogTitle}
                        confirm={strings.ok}
                        message={strings.infoDialogMessage}
                    />

                    <AboutDialog
                        title={strings.aboutDialogTitle}
                        confirm={strings.ok}
                        message={strings.aboutDialogMessage
                            .replace('{version}', strings.version)
                            .replace('{mission}', strings.mission)}
                    />
                </Appbar>
            </View>
        );
    }
}