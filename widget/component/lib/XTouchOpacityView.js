import {TouchableOpacity} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import {isNull} from "./helper/StringUtils";

export default class XTouchOpacityView extends Component {

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
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        pressTime: 1000,
    };

    render() {
        let lastPressTime = 1;
        const {disabled, activeOpacity, onPress, onLongPress, onPressIn, onPressOut, pressTime, pressTimePress, object, touchOpacityStyle} = this.props;
        return <TouchableOpacity
            style={touchOpacityStyle}
            disabled={disabled}
            activeOpacity={activeOpacity}
            onLongPress={() => {
                if (!isNull(onLongPress)) {
                    onLongPress();
                }
            }}
            onPressIn={() => {
                if (!isNull(onPressIn)) {
                    onPressIn();
                }
            }}
            onPressOut={() => {
                if (!isNull(onPressOut)) {
                    onPressOut();
                }
            }}
            onPress={() => {
                let curTime = new Date().getTime();
                if (curTime - lastPressTime > pressTime) {
                    lastPressTime = curTime;
                    if (!isNull(onPress)) {
                        onPress(object);
                    }
                } else {
                    if (!isNull(pressTimePress)) {
                        pressTimePress();
                    }
                }
            }}>{this.props.children}</TouchableOpacity>
    }

}


