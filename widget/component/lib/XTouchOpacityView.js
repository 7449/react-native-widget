import {TouchableOpacity} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class XTouchOpacityView extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        activeOpacity: PropTypes.number,
        underlayColor: PropTypes.string,
        pressTime: PropTypes.number,
        pressTimePress: PropTypes.func.isRequired,
        onPress: PropTypes.func.isRequired,
        object: PropTypes.object,
        style: PropTypes.object,
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        underlayColor: 'white',
        pressTime: 2000,
        style: {},
    };

    render() {
        let lastPressTime = 1;
        const {disabled, activeOpacity, underlayColor, onPress, pressTime, pressTimePress, object, style} = this.props;
        return <TouchableOpacity
            style={style}
            disabled={disabled}
            activeOpacity={activeOpacity}
            underlayColor={underlayColor}
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


