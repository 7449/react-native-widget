import React, {Component} from 'react';
import {View} from "react-native";
import XToolBar from "../XToolBar";
import PropTypes from "prop-types";
import {fixStatusBarHeight, width} from "../helper/Screen";
import {x16, x6} from "../helper/Dimens";
import {isNull} from "../helper/StringUtils";

export default class SimpleToolBar extends Component {

    static propTypes = {
        leftIcon: PropTypes.any,
        leftText: PropTypes.string,
        backPress: PropTypes.func,

        centerText: PropTypes.string,
        rightText: PropTypes.string,
        rightPress: PropTypes.func,
    };

    static defaultProps = {
        leftIcon: require('../ximage/icon_back.png'),
        leftText: 'text',
        rightText: '',
        centerText: '',
    };

    render() {
        const {leftText, leftIcon, backPress, centerText, rightText, rightPress} = this.props;
        return <View style={{width: width, marginTop: fixStatusBarHeight}}>
            <XToolBar leftText={leftText}
                      leftIconStyle={{width: x16, height: x16, marginEnd: x6}}
                      leftIcon={leftIcon}
                      leftDisabled={isNull(backPress)}
                      leftPress={backPress}
                      centerText={centerText}
                      rightText={rightText}
                      rightDisabled={isNull(rightPress)}
                      rightPress={rightPress}/>
        </View>
    }
}
