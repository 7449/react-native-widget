import React from "react";
import {Alert, View} from "react-native";
import {XBackComponent, XText, XTouchHighView, XTouchOpacityView} from "../widget/component/index";
import {itemStyle} from "./Style";

export default class SimpleXTouchScreen extends XBackComponent {

    render() {
        return (
            <View>
                <XTouchOpacityView
                    activeOpacity={0.4}
                    onPress={() => {

                    }}
                    pressTime={2000}
                    pressTimePress={() => {
                        Alert.alert('', '请勿快速重复点击')
                    }}
                    touchOpacityStyle={itemStyle}>
                    <XText text={'XTouchOpacityView'}/>
                </XTouchOpacityView>
                <XTouchHighView
                    underlayColor={'blue'}
                    onPress={() => {

                    }}
                    pressTime={2000}
                    pressTimePress={() => {
                        Alert.alert('', '请勿快速重复点击')
                    }}
                    touchHighStyle={itemStyle}>
                    <XText text={'XTouchHighView'}/>
                </XTouchHighView>
                <XTouchHighView
                    disabled={true}
                    touchHighStyle={itemStyle}>
                    <XText text={' NO TOUCH XTouchHighView'}/>
                </XTouchHighView>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

