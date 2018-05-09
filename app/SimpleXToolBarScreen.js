import React from "react";
import {XBackComponent, XToolBar} from "../widget/component/index";
import {x10} from "../widget/component/lib/helper/Dimens";
import {View} from "react-native";
import XText from "../widget/component/lib/XText";

export default class SimpleXToolBarScreen extends XBackComponent {

    render() {
        return (
            <View>
                <XToolBar
                    leftIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                    rightIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                    centerIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                    leftText={'left'}
                    centerText={'center'}
                    rightText={'right'}
                    rightDisabled={false}/>

                <View style={{alignItems: 'center'}}>
                    <XText text={'XToolBar'}/>
                </View>

            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

