import React, { Component } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native'
import { fetchUrl } from '../model/parser/smatapi'
import ListItem from './subComponents/ListItem'
import { SearchBar } from 'react-native-elements'
import EmptyListView from './subComponents/EmptyListView'
import strings from '../Strings/Strings'
import Spinner from './subComponents/Spinner'

const styles = StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
        backgroundColor:'#E1E8EE'
    },
    item: {
        backgroundColor: 'blue'
    },
    title: {
        color: 'black'
    },
    flatList: {
        margin: 10
    }
})

export default class ListView extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            isLoading: true,
            filter: '',
            completeData: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.getItems()
    }

    getItems = async () => {
        let d = await fetchUrl(true)
        this.setState({
            data: d,
            completeData: d,
            isLoading: false
        })
    }



    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            parameters={item.parameters}
            columns={item.columns}
            salted={item.salted}
        />
    )

    renderHeader = () => {
        return <SearchBar
            placeholder={strings.search_place}
            lightTheme round editable={true}
            onChangeText={(t) => {
                if (t !== '') {
                    let filtered = this.state.completeData
                        .filter((v) => {
                            return v.name.toLowerCase().includes(t.toLowerCase())
                        })
                    this.setState({
                        filter: t,
                        data: !filtered ||
                            filtered.length === 0
                            ? null
                            : filtered
                    })
                } else {
                    this.setState({
                        filter: t,
                        data: this.state.completeData
                    })
                }

            }}
            value={this.state.filter} />;
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderHeader()}
                {
                    !this.state.data && !this.state.isLoading
                        ? <EmptyListView />
                        : this.state.isLoading
                            ? <Spinner />
                            : <FlatList
                                style={styles.flatList}
                                data={this.state.data}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.id}
                            />}
            </SafeAreaView>
        )
    }
}
