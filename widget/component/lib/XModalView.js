import {Modal, View} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class XModalView extends Component {

    static propTypes = {
        animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
        visibility: PropTypes.bool,
        transparent: PropTypes.bool,
        onRequestClose: PropTypes.func.isRequired,
        childViewStyle: PropTypes.any,
    };

    static defaultProps = {
        visibility: false,
        transparent: true,
        animationType: 'none',
        childViewStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
    };


    render() {
        const {animationType, visibility, transparent, onRequestClose, childViewStyle} = this.props;
        return (
            <Modal
                visible={visibility}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={onRequestClose}>
                <View style={childViewStyle}>{this.props.children}</View>
            </Modal>
        )
    }

}

