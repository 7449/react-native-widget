import {TouchableHighlight} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import {isNull} from "./helper/StringUtils";

export default class XTouchHighView extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        underlayColor: PropTypes.string,
        pressTime: PropTypes.number,
        pressTimePress: PropTypes.func,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        object: PropTypes.object,
        touchHighStyle: PropTypes.any,
    };

    static defaultProps = {
        disabled: false,
        underlayColor: 'white',
        pressTime: 2000,
    };


    render() {
        let lastPressTime = 1;
        const {disabled, underlayColor, onPress, onLongPress, onPressIn, onPressOut, pressTime, pressTimePress, object, touchHighStyle} = this.props;
        return <TouchableHighlight
            style={touchHighStyle}
            disabled={disabled}
            underlayColor={underlayColor}
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
            }}>{this.props.children}</TouchableHighlight>
    }

}


