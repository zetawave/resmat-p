import React from 'react'
import { Image } from 'react-native'
import { View, StyleSheet, Text } from 'react-native'
import NoResultImg from '../../assets/img/no_result.png'
import strings from '../../Strings/Strings'

export default function EmptyListView(){
    return(
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={NoResultImg}
            />
            <Text style={styles.text}>{strings.no_result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        height:'100%',
        alignContent:'center'
    },
    image:{
        width:200,
        height:200,
        alignSelf:'center'
    },
    text:{
       margin:20,
       alignSelf:'center' 
    }
})

