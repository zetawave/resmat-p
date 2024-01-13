import * as React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Appbar } from 'react-native-paper';

export function SimpleInfoDialog(props) {
    const [isVisible, setVisible] = React.useState(false)

    const showAlert = () => {
        setVisible(true)
    };

    const hideAlert = () => {
        setVisible(false)
    };

    return (
        <>
            <Appbar.Action
                icon="info"
                onPress={showAlert}
                color='white'
            />
            <AwesomeAlert
                show={isVisible}
                showProgress={false}
                title={props.title}
                message={props.message}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={props.confirm}
                confirmButtonColor="#304FFE"
                onConfirmPressed={() => {
                    hideAlert();
                }}
                onClose={() => {
                    hideAlert() }}
            />
        </>
    )
};

export function AboutDialog(props) {
    const [isVisible, setVisible] = React.useState(false)

    const showAlert = () => {
        setVisible(true)
    };

    const hideAlert = () => {
        setVisible(false)
    };

    return (
        <>
            <Appbar.Action
                icon='account-tie'
                onPress={showAlert}
                color='white'
            />
            <AwesomeAlert
                show={isVisible}
                showProgress={false}
                title={props.title}
                message={props.message}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={props.confirm}
                confirmButtonColor="#304FFE"
                onConfirmPressed={() => {
                    hideAlert();
                }}
                onClose={() => hideAlert()}
            />
        </>
    )
};

