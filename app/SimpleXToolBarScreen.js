import React from "react";
import {XBackComponent, XToolBar} from "../widget/component/index";
import {x10} from "../widget/component/lib/helper/Dimens";

export default class SimpleXToolBarScreen extends XBackComponent {

    render() {
        return (
            <XToolBar
                leftIconStyle={{marginEnd: x10}}
                leftIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                centerIcon={require('../widget/component/lib/ximage/icon_temp.png')}
                leftText={'left'}
                centerText={'center'}
                rightText={'right'}
                rightDisabled={false}/>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

