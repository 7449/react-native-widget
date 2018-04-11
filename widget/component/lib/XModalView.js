import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import {screenH, screenW} from "./helper/Screen";
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
            width: screenW,
            height: screenH,
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
                <View style={childViewStyle}>
                    {isNull(onPress) ? null :
                        <TouchableWithoutFeedback onPress={onPress}>
                            <View style={viewStyle}/>
                        </TouchableWithoutFeedback>}
                    {this.props.children}
                </View>
            </Modal>
        )
    }

}

