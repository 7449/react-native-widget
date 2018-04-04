import React from "react";
import {View} from "react-native";
import {XBackComponent, XImage, XText} from "../widget/component/index";

export default class SimpleXImageScreen extends XBackComponent {

    render() {
        return (
            <View>
                <View style={{padding: 10}}>
                    <XText text={'本地图片'}/>
                    <XImage icon={require('../image/avatar.png')} imageStyle={{width: 200, height: 200}}/>
                </View>
                <View style={{padding: 10}}>
                    <XText text={'网络图片'}/>
                    <XImage
                        icon={{uri: 'http://pic.58pic.com/58pic/14/27/45/71r58PICmDM_1024.jpg'}}
                        imageStyle={{width: 200, height: 200}}/>
                </View>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}
