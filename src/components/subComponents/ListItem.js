import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import Animated, { Easing } from 'react-native-reanimated'
import { cyrb53, getAnimatedTiming } from '../../Shared/shared'

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        left: -200
    },
    item: {
        margin: 8,
        backgroundColor: 'white'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16
    },
    titleView: {
        backgroundColor: '#3D5AFE',
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 10,
        bottom: 30,
        elevation: 10
    },
    paragraphTitle: {
        color: 'red',
        fontSize: 18,
        marginLeft: 3
    },
    paragraphDescription: {
        color: 'black',
        fontSize: 14,
        marginLeft: 6
    }
})

export default class ListItem extends Component {

    constructor() {
        super()
        this.state = {
            scaleValue: new Animated.Value(-200),
            titleScaleValue: new Animated.Value(-200)

        }
    }

    componentDidMount() {
        getAnimatedTiming(this.state.scaleValue, this.props.index, 300, Easing.linear, 200)
        getAnimatedTiming(this.state.titleScaleValue, this.props.index, 700, Easing.linear, 0)
    }
    render() {
        return (
            <Animated.View style={{ left: this.state.scaleValue }}>
                <View style={styles.container}>
                    <Card
                        key={cyrb53(this.props.title, this.props.salted)}
                        style={styles.item}>
                        <Card.Content>
                            <Animated.View style={{ left: this.state.titleScaleValue }}>
                                <View style={styles.titleView}>
                                    <Text style={styles.title}>{this.props.title}</Text>
                                </View>
                            </Animated.View>
                            {
                                this.props.parameters.map((row, index) => {
                                    return (
                                        <>
                                            <Paragraph
                                                key={this.props.salted}
                                                style={styles.paragraphTitle}
                                            >
                                                {this.props.columns[index]}
                                            </Paragraph>
                                            <Paragraph
                                                style={styles.paragraphDescription}
                                                key={
                                                    cyrb53(row, this.props.salted)}
                                            >
                                                {row}
                                            </Paragraph>
                                        </>
                                    )
                                })
                            }
                        </Card.Content>
                    </Card>
                </View>
            </Animated.View>
        )

    }
}