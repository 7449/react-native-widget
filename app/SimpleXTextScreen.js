import React from "react";
import {StyleSheet, View} from "react-native";
import {XBackComponent, XText, XTouchHighView} from "../widget/component/index";
import {itemStyle} from "./Style";

export default class SimpleXTextScreen extends XBackComponent {

    render() {
        return (
            <View>
                <View style={itemStyle}>
                    <XText textStyle={styles.content} text={'NO TOUCH XText'}/>
                </View>
                <XText
                    onPress={() => {
                    }}
                    pressTimePress={() => {
                    }}
                    touchOpacityStyle={itemStyle} textStyle={styles.content} text={'Touch Opacity XText'}/>
                <XTouchHighView
                    touchHighStyle={itemStyle}
                    underlayColor={'blue'}
                    pressTimePress={() => {
                    }}
                    onPress={() => {
                    }}>
                    <XText text={'Touch High XText'} textStyle={styles.content}/>
                </XTouchHighView>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

const styles = StyleSheet.create({
    content: {
        textAlign: 'center',
        fontSize: 18,
    },
});
