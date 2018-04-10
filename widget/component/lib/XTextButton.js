import {Image, View} from 'react-native';
import React, {Component} from "react";
import XTouchOpacityView from "./XTouchOpacityView";
import PropTypes from "prop-types";
import XText from "./XText";

export default class XTextButton extends Component {

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

        imageStyle: PropTypes.any,
        imageOption: PropTypes.oneOf(['top', 'bottom']),
        icon: PropTypes.any,

        viewStyle: PropTypes.any,
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        pressTime: 2000,

        numberOfLines: 1,
        imageOption: 'top',
    };

    render() {
        return !this.props.disabled ? this.getTouchView() : this.getView();
    }

    getTouchView = () => {
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
            {this.getView()}
        </XTouchOpacityView>;
    };

    getView = () => {
        const {
            numberOfLines,
            textStyle,
            fontSize,
            text,
            viewStyle,
            icon,
            imageStyle,
            imageOption,
        } = this.props;
        switch (imageOption) {
            case 'top':
                return <View style={[viewStyle]}>
                    <XText disabled={true}
                           textStyle={textStyle}
                           fontSize={fontSize}
                           numberOfLines={numberOfLines} text={text}/>
                    <Image style={[imageStyle]} source={icon}/>
                </View>;
            case 'bottom':
                return <View style={[viewStyle]}>
                    <Image style={[imageStyle]} source={icon}/>
                    <XText disabled={true}
                           fontSize={fontSize}
                           textStyle={textStyle}
                           numberOfLines={numberOfLines} text={text}/>
                </View>;
            default:
                return null;
        }
    };
}
