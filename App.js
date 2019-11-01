import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {XBackComponent, XText} from "./widget/component/index";
import {
    ScreenXCardName,
    ScreenXFlatListName,
    ScreenXImageName,
    ScreenXLoadingName,
    ScreenXModalName,
    ScreenXSectionListName,
    ScreenXStatusName,
    ScreenXTabName,
    ScreenXTextButtonName,
    ScreenXTextName,
    ScreenXToolBarName,
    ScreenXTouchName
} from "./app/code/String";
import {fixStatusBarHeight, screenW} from "./widget/component/lib/helper/Screen";

export default class App extends XBackComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{'已经添加的组件'}</Text>
                <ScrollView>
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
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXFlatListName)}
                        text={'XFlatList'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXSectionListName)}
                        text={'XSectionList'}
                        textStyle={styles.item}/>
                    <XText
                        onPress={() => this.props.navigation.navigate(ScreenXTabName)}
                        text={'XTab'}
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
        paddingTop: fixStatusBarHeight,
    },
    title: {
        padding: 10,
        fontSize: 18,
        margin: 8,
        textAlign: 'center'
    },
    item: {
        marginBottom: 8,
        padding: 8,
        textAlign: 'center',
        backgroundColor: 'gray',
        width: screenW,
        fontSize: 18,
        color: 'white',
    },
});
