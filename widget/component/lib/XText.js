import {Text} from 'react-native';
import React, {Component} from "react";
import XTouchOpacityView from "./XTouchOpacityView";
import PropTypes from "prop-types";

export default class XText extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        activeOpacity: PropTypes.number,
        pressTime: PropTypes.number,
        pressTimePress: PropTypes.func,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        object: PropTypes.object,
        touchOpacityStyle: PropTypes.any,

        numberOfLines: PropTypes.number,
        text: PropTypes.string,
        textStyle: PropTypes.any,
        fontSize: PropTypes.number,
        fontFamily: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        pressTime: 2000,

        numberOfLines: 1,
        fontSize: 18,
        fontFamily: 'newFont',
    };

    render() {
        return !this.props.disabled ? this.getTouchText() : this.getText();
    }

    getTouchText = () => {
        const {
            disabled,
            activeOpacity,
            pressTime,
            pressTimePress,
            onPress,
            onLongPress,
            onPressIn,
            onPressOut,
            object,
            touchOpacityStyle,
        } = this.props;
        return <XTouchOpacityView
            disabled={disabled}
            activeOpacity={activeOpacity}
            pressTime={pressTime}
            pressTimePress={pressTimePress}
            onLongPress={onLongPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            object={object}
            touchOpacityStyle={touchOpacityStyle}>
            {this.getText()}
        </XTouchOpacityView>;
    };

    getText = () => {
        const {
            numberOfLines,
            textStyle,
            fontFamily,
            fontSize,
            text
        } = this.props;
        return <Text style={[{fontFamily: fontFamily, fontSize: fontSize}, textStyle]}
                     numberOfLines={numberOfLines}>{text}</Text>;
    };
}
