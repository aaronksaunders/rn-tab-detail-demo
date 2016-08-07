  import React, { Component } from 'react';
  import { View } from 'react-native';

import {
    StyleSheet,
    TabBarIOS,
    Text
} from 'react-native';
import TabItemOne from '../Components/TabItemOne'
import TabItemTwo from '../Components/TabItemTwo'

export default class TabBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }

    _setSelected(_tabItem) {
        this.setState({
            selectedTab: _tabItem,
        });
    }

    _isSelected(_tabItem) {
        return this.state.selectedTab === _tabItem
    }


    render() {
        return (
            <TabBarIOS
                tintColor="white"
                barTintColor="darkslateblue">
                <TabItemOne
                    selected={ this._isSelected('blueTab') }
                    onPress={() => this._setSelected('blueTab') }
                    />
                <TabItemTwo
                    selected={ this._isSelected('greenTab') }
                    onPress={() => this._setSelected('greenTab') }
                    />
            </TabBarIOS >
        )
    }
}

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});