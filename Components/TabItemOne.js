import React, { Component } from 'react';
import { View } from 'react-native';

import {
    StyleSheet,
    TabBarIOS,
    Text,
    Navigator
} from 'react-native';
import NavigationBar from 'react-native-navbar';


class TabItemOneDetail extends React.Component {
    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => {
                this.props.navigator.pop();
            },
        };
        const titleConfig = {
            title: 'Tab One Detail Page',
        };
        return (
            <View style={styles.tabContent}>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig} />
                <Text style={styles.welcome}>
                    Welcome to TabItemOneDetail
                </Text>
            </View>
        )
    }
}


/**
 * this is the view that is wrapped in the Navigator Component
 */
class TabItemOneView extends React.Component {
    render() {
        const rightButtonConfig = {
            title: 'Next',
            handler: () => {
                this.props.navigator.push({
                    name: 'TabItemOneDetail',
                    component: TabItemOneDetail
                });
            },
        };

        const titleConfig = {
            title: 'Tab Example With Navigator',
        };
        return (
            <View style={styles.tabContent}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig} />
                <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    margin: 10,
                }}>TabItemOne</Text>
            </View>
        )
    }
}
/**
 * This is the TabBarIOS.Item Component, this holds the actual content for the view inside
 * of the React.Navigator Component so that we can have nested detail pages and the proper 
 * UX
 */
export default class TabItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <TabBarIOS.Item
                selected={ this.props.selected }
                onPress={ this.props.onPress }
                title="Blue Tab">
                <Navigator
                    initialRoute={{ name: 'TabItemOneView', component: TabItemOneView }}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    } }
                    renderScene={(route, navigator) => {
                        // count the number of func calls
                        //console.log(route, navigator);

                        if (route.component) {
                            return React.createElement(route.component, { navigator });
                        }
                    } }
                    />
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