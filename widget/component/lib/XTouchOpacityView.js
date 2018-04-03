import {TouchableOpacity} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class XTouchOpacityView extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        activeOpacity: PropTypes.number,
        pressTime: PropTypes.number,
        pressTimePress: PropTypes.func,
        onPress: PropTypes.func,
        object: PropTypes.object,
        touchOpacityStyle: PropTypes.any,
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        pressTime: 2000,
    };

    render() {
        let lastPressTime = 1;
        const {disabled, activeOpacity, onPress, pressTime, pressTimePress, object, touchOpacityStyle} = this.props;
        return <TouchableOpacity
            style={touchOpacityStyle}
            disabled={disabled}
            activeOpacity={activeOpacity}
            onPress={() => {
                let curTime = new Date().getTime();
                if (curTime - lastPressTime > pressTime) {
                    lastPressTime = curTime;
                    onPress(object);
                } else {
                    pressTimePress();
                }
            }}>{this.props.children}</TouchableOpacity>
    }

}


