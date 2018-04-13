import React from "react";
import {View} from "react-native";
import {XBackComponent, XToolBar} from "../widget/component/index";
import {x10} from "../widget/component/lib/helper/Dimens";
import {fixStatusBarHeight} from "../widget/component/lib/helper/Screen";

export default class SimpleXToolBarScreen extends XBackComponent {

    render() {
        return (
            <View style={{backgroundColor: 'gray', marginTop: fixStatusBarHeight + x10}}>
                <XToolBar
                    leftIconStyle={{marginEnd: x10}}
                    leftIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                    centerIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                    leftText={'left'}
                    centerText={'center'}
                    rightText={'right'}
                    rightDisabled={false}/>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

