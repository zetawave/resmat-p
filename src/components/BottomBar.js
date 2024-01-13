import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import Home from './Screens/Home'
import Archive from './Screens/Archive'
import { showToastAndroid } from '../Shared/shared'
import { ToastAndroid, StyleSheet } from 'react-native'
import strings from '../Strings/Strings'

const indexes = {
    home: 0,
    archive: 1
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: '#304FFE',
    }
})

const WaterHome = () => <Home />;

const ArchiveRoute = () => <Archive />;

const BottomBar = () => {
    const [index, setIndex] = React.useState(0);
    const [shifting] = React.useState(false)
    const [routes] = React.useState([
        { key: 'water', title: strings.water, icon: 'water' },
        { key: 'archive', title: strings.archive, icon: 'archive' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        water: WaterHome,
        archive: ArchiveRoute,
    });

    const changeIndex = (i) => {
        if (i === indexes.archive) {
            showToastAndroid(strings.wp, ToastAndroid.SHORT)
            return
        }
        setIndex(i)
    }

    return (
        <BottomNavigation
            shifting={shifting}
            barStyle={styles.bottomBar}
            navigationState={{ index, routes }}
            onIndexChange={(i) => {
                changeIndex(i)
            }}
            renderScene={renderScene}
        />
    );
};

export default BottomBar;