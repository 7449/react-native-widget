import {Image} from 'react-native';
import React, {Component} from "react";
import XTouchOpacityView from "./XTouchOpacityView";
import {isNull} from "./helper/StringUtils";
import PropTypes from "prop-types";

export default class XImage extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        activeOpacity: PropTypes.number,
        pressTime: PropTypes.number,
        pressTimePress: PropTypes.func,
        onPress: PropTypes.func,
        object: PropTypes.object,
        touchOpacityStyle: PropTypes.any,

        imageStyle: PropTypes.any,
        icon: PropTypes.any,
    };

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
        pressTime: 2000,
    };

    render() {
        return !isNull(this.props.onPress) ? this.getTouchImage() : this.getImage();
    }

    getTouchImage = () => {
        const {
            disabled,
            activeOpacity,
            pressTime,
            pressTimePress,
            onPress,
            object,
            touchOpacityStyle,
        } = this.props;
        return <XTouchOpacityView
            disabled={disabled}
            activeOpacity={activeOpacity}
            pressTime={pressTime}
            pressTimePress={pressTimePress}
            onPress={onPress}
            object={object}
            touchOpacityStyle={touchOpacityStyle}>
            {this.getImage()}
        </XTouchOpacityView>;
    };

    getImage = () => {
        const {
            imageStyle,
            icon,
        } = this.props;
        return <Image style={[imageStyle]} source={icon}/>;
    };
}
