import {View} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import XTouchOpacityView from "./XTouchOpacityView";
import {x10, x5} from "./helper/Dimens";
import XTouchHighView from "./XTouchHighView";

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

        type: PropTypes.oneOf(['opacity', 'high']),

        underlayColor: PropTypes.string,
        touchHighStyle: PropTypes.any,
    };

    static defaultProps = {
        cardStyle: {
            marginTop: x5,
            marginBottom: x5,
            marginStart: x10,
            marginEnd: x10,
            borderRadius: x5,
        },
        type: 'opacity',
        underlayColor: '#E9ECF4',
    };

    render() {
        let type = this.props.type;
        switch (type) {
            case 'opacity':
                return this.getTouchOpacityCard();
            case 'high':
                return this.getTouchHighCard();
            default:
                return this.getCard();
        }
    }

    getTouchOpacityCard = () => {
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

    getTouchHighCard = () => {
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
            {this.getCard()}
        </XTouchHighView>
    };


    getCard = () => {
        const {cardStyle} = this.props;
        return (
            <View style={cardStyle}>{this.props.children}</View>
        );
    };

}

