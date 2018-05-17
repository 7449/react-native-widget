import {Text} from 'react-native';
import React, {Component} from "react";
import XTouchOpacityView from "./XTouchOpacityView";
import PropTypes from "prop-types";
import {x18} from "./helper/Dimens";
import {isAndroid} from "./helper/StringUtils";
import XTouchHighView from "./XTouchHighView";

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

        type: PropTypes.oneOf(['opacity', 'high']),

        underlayColor: PropTypes.string,
        touchHighStyle: PropTypes.any,
    };

    static defaultProps = {
        numberOfLines: 1,
        fontSize: x18,
        fontFamily: 'newFont',
        type: 'opacity',
    };

    render() {
        if (this.props.disabled) return this.getText();
        let type = this.props.type;
        switch (type) {
            case 'opacity':
                return this.getTouchOpacityText();
            case 'high':
                return this.getTouchHighText();
            default:
                return null;
        }
    }


    getTouchHighText = () => {
        const {
            disabled,
            underlayColor,
            pressTime,
            pressTimePress,
            onPress,
            onLongPress,
            onPressIn,
            onPressOut,
            object,
            touchHighStyle,
        } = this.props;
        return <XTouchHighView
            disabled={disabled}
            underlayColor={underlayColor}
            pressTimePress={pressTimePress}
            pressTime={pressTime}
            onPress={onPress}
            onLongPress={onLongPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            object={object}
            touchHighStyle={touchHighStyle}
        >
            {this.getText()}
        </XTouchHighView>
    };


    getTouchOpacityText = () => {
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
            text,
        } = this.props;
        return <Text style={[{fontFamily: isAndroid() ? fontFamily : null, fontSize: fontSize}, textStyle]}
                     numberOfLines={numberOfLines}>{text}</Text>;
    };

    getSuperText = () => {
        const {
            numberOfLines,
            textStyle,
            fontFamily,
            fontSize,
            text,
            disabled,
            onPress,
            onLongPress
        } = this.props;
        return <Text style={[{fontFamily: isAndroid() ? fontFamily : null, fontSize: fontSize}, textStyle]}
                     disabled={disabled}
                     onPress={onPress}
                     onLongPress={onLongPress}
                     numberOfLines={numberOfLines}>{text}</Text>;
    }
}
