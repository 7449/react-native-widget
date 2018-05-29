import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import {isNull} from "./helper/StringUtils";

export default class XModalView extends Component {

    static propTypes = {
        animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
        visibility: PropTypes.bool,
        transparent: PropTypes.bool,
        onRequestClose: PropTypes.func.isRequired,
        onPress: PropTypes.func,
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
        viewStyle: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
    };


    render() {
        const {animationType, visibility, transparent, onRequestClose, childViewStyle, onPress, viewStyle} = this.props;
        return (
            <Modal
                visible={visibility}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={onRequestClose}>
                {isNull(onPress) ? <View style={childViewStyle}>
                        {this.props.children}
                    </View> :
                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={viewStyle}>
                            <View style={childViewStyle}>
                                {this.props.children}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>}
            </Modal>
        )
    }

}

