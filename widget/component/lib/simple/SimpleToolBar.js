import React, {Component} from 'react';
import {View} from "react-native";
import XToolBar from "../XToolBar";
import PropTypes from "prop-types";
import {fixStatusBarHeight, width} from "../helper/Screen";

export default class SimpleToolBar extends Component {

    static propTypes = {
        leftIcon: PropTypes.any,
        leftText: PropTypes.string,
        childrenStyle: PropTypes.any,
        backPress: PropTypes.func,

        centerText: PropTypes.string,
        rightText: PropTypes.string,
        rightPress: PropTypes.func,
    };

    static defaultProps = {
        leftIcon: require('../ximage/icon_back.png'),
        leftText: 'text',
        rightText: 'text',
        centerText: 'text',
    };

    render() {
        const {leftText, leftIcon, backPress, childrenStyle, centerText, rightText, rightPress} = this.props;
        return <View style={{width: width, marginTop: fixStatusBarHeight}}>
            <XToolBar leftText={leftText}
                      leftIcon={leftIcon}
                      leftPress={backPress}
                      centerText={centerText}
                      rightText={rightText}
                      rightPress={rightPress}/>
            <View style={[{flex: 1}, childrenStyle]}>
                {this.props.children}
            </View>
        </View>;
    }
}
