import React, {Component} from "react";
import {ActivityIndicator, View} from "react-native";
import XModalView from "./XModalView";
import PropTypes from "prop-types";

export default class XLoadingView extends Component {

    static propTypes = {
        animating: PropTypes.bool,
        color: PropTypes.string,
        size: PropTypes.string,
        indicatorStyle: PropTypes.any,

        animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
        visibility: PropTypes.bool,
        transparent: PropTypes.bool,
        onRequestClose: PropTypes.func,
    };

    static defaultProps = {
        animating: true,
        color: '#65A8F8',
        size: 'large',
        onRequestClose: () => {
        },
        indicatorStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
    };

    render() {
        const {animating, color, size, indicatorStyle, animationType, visibility, transparent, onRequestClose} = this.props;
        return <XModalView
            visibility={visibility}
            animationType={animationType}
            transparent={transparent}
            onRequestClose={onRequestClose}>
            <View style={indicatorStyle}>
                <ActivityIndicator
                    animating={animating}
                    color={color}
                    size={size}
                />
            </View>
        </XModalView>
    }
}
