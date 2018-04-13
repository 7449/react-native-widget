import {View} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import XTouchOpacityView from "./XTouchOpacityView";
import {x10, x5} from "./helper/Dimens";

export default class XCardView extends Component {

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

        cardStyle: PropTypes.any,
    };

    static defaultProps = {
        cardStyle: {
            marginTop: x5,
            marginBottom: x5,
            marginStart: x10,
            marginEnd: x10,
            borderRadius: x5,
            backgroundColor: 'white',
        },
    };

    render() {
        return !this.props.disabled ? this.getTouchCard() : this.getCard();
    }

    getTouchCard = () => {
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
            {this.getCard()}
        </XTouchOpacityView>;
    };

    getCard = () => {
        const {cardStyle} = this.props;
        return (
            <View style={cardStyle}>{this.props.children}</View>
        );
    };

}

