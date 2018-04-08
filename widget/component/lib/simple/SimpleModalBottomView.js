import {View} from 'react-native';
import React, {Component} from "react";
import XText from "../XText";
import PropTypes from "prop-types";

export default class SimpleModalBottomView extends Component {

    static propTypes = {
        okPress: PropTypes.func.isRequired,
        cancelPress: PropTypes.func.isRequired,

        okText: PropTypes.string,
        cancelText: PropTypes.string,

        okStyle: PropTypes.any,
        cancelStyle: PropTypes.any,
    };

    static defaultProps = {
        okText: '确定',
        cancelText: '取消',
        okStyle: {
            color: 'gray',
            padding: 8,
            margin: 10
        },
        cancelStyle: {
            color: 'gray',
            padding: 8,
            margin: 10
        },
        viewStyle: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: 20,
            marginEnd: 20
        },
    };

    render() {
        const {okPress, cancelPress, okText, cancelText, okStyle, cancelStyle, viewStyle} = this.props;
        return (
            <View style={viewStyle}>
                <XText onPress={cancelPress} textStyle={cancelStyle} text={cancelText}/>
                <XText onPress={okPress} textStyle={okStyle} text={okText}/>
            </View>
        )
    }

}

