import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {XBackComponent, XText} from "./widget/component/index";

export default class App extends XBackComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{'已经添加的组件'}</Text>
                <ScrollView>
                    <XText text={'XBackComponent'} textStyle={styles.item}/>
                    <XText text={'XTouchHighView'} textStyle={styles.item}/>
                    <XText text={'XTouchOpacityView'} textStyle={styles.item}/>
                    <XText text={'XText'} textStyle={styles.item}/>
                </ScrollView>
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
    item: {
        padding: 10,
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'gray',
        width: 500,
        fontSize: 20,
        color: 'white',
    },
});
