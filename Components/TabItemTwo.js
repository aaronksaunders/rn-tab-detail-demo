import React, { Component } from 'react';
import { View } from 'react-native';

import {
    StyleSheet,
    TabBarIOS,
    Text
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class TabItemTwo extends React.Component {
    render() {

        const leftButtonConfig = {};
        const titleConfig = {
            title: 'Tab Two Main Page',
        };

        return (
            <TabBarIOS.Item
                selected={ this.props.selected }
                onPress={ this.props.onPress }
                title="Green Tab">
                <View style={styles.tabContent}>
                    <NavigationBar
                        title={titleConfig}/>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        margin: 10,
                    }}>TabItemTwo</Text>
                </View>
            </TabBarIOS.Item>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabContent: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});