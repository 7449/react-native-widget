import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {XBackComponent, XText} from "../widget/component/index";
import {
    ScreenXCardName,
    ScreenXImageName,
    ScreenXLoadingName,
    ScreenXModalName,
    ScreenXStatusName,
    ScreenXTextButtonName,
    ScreenXTextName,
    ScreenXToolBarName,
    ScreenXTouchName
} from "./String";

export default class App extends XBackComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{'已经添加的组件'}</Text>
                <ScrollView>
                    <XText
                        text={'XBackComponent'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXTouchName)}
                        text={'XTouch'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXTextName)}
                        text={'XText'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXImageName)}
                        text={'XImage'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXCardName)}
                        text={'XCard'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXTextButtonName)}
                        text={'XTextButton'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXStatusName)}
                        text={'XStatus'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXModalName)}
                        text={'XModal'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXLoadingName)}
                        text={'XLoading'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXToolBarName)}
                        text={'XToolBar'}
                        textStyle={styles.item}/>
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
