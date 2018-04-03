import {Text} from 'react-native';
import React, {Component} from "react";
import XTouchOpacityView from "./XTouchOpacityView";
import {isNull} from "./helper/StringUtils";
import PropTypes from "prop-types";

export default class XText extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        activeOpacity: PropTypes.number,
        underlayColor: PropTypes.string,
        pressTime: PropTypes.number,
        pressTimePress: PropTypes.func,
        onPress: PropTypes.func,
        object: PropTypes.object,
        touchOpacityStyle: PropTypes.object,

        numberOfLines: PropTypes.number,
        text: PropTypes.string,
        textStyle: PropTypes.number,
        fontSize: PropTypes.number,
        fontFamily: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        underlayColor: 'white',
        pressTime: 2000,

        numberOfLines: 1,
        fontSize: 18,
        fontFamily: 'newFont',
    };

    render() {
        return !isNull(this.props.onPress) ? this.getTouchText() : this.getText();
    }

    getTouchText = () => {
        const {
            disabled,
            activeOpacity,
            underlayColor,
            pressTime,
            pressTimePress,
            onPress,
            object,
            touchOpacityStyle,
        } = this.props;
        return <XTouchOpacityView
            disabled={disabled}
            activeOpacity={activeOpacity}
            underlayColor={underlayColor}
            pressTime={pressTime}
            pressTimePress={pressTimePress}
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
