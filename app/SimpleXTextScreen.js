import React from "react";
import {StyleSheet} from "react-native";
import {XBackComponent, XText} from "../widget/component/index";

export default class SimpleXTextScreen extends XBackComponent {

    render() {
        return (
            <XText textStyle={styles.content} text={'暂未开发'}/>
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
        color: '#f00',
        padding: 20,
        fontSize: 22,
    },
});
