import React from "react";
import {View} from "react-native";
import {XBackComponent, XText} from "../../widget/component/index";
import {itemStyle} from "./Style";
import {ScreenXTextName} from "./String";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXTouchScreen extends XBackComponent {

    render() {
        return (
            <View style={{paddingTop: fixStatusBarHeight}}>
                <XText touchOpacityStyle={itemStyle}
                       onPress={() => this.props.navigation.navigate(ScreenXTextName)}
                       textStyle={{textAlign: 'center', fontSize: 18}} text={'go XText'}/>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

