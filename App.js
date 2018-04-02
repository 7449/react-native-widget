import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {XBackComponent} from "./widget/component/index";

export default class App extends XBackComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{'已经添加的组件'}</Text>
                <View style={styles.itemContent}>
                    <Text style={styles.item}>{'XBackComponent:'}</Text>
                    <Text style={styles.childItem}>{'对android back的注册'}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        padding: 10,
        fontSize: 20,
        margin: 10,
        width: '80%',
        textAlign: 'center'
    },
    itemContent: {
        padding: 10,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'gray',
        width: '80%',
        justifyContent: 'space-around',
    },
    item: {
        fontSize: 20,
        color: 'white',
    },
    childItem: {
        fontSize: 14,
        color: 'white',
    },
});
