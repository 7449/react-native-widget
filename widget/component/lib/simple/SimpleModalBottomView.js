import {View} from 'react-native';
import React, {Component} from "react";
import XText from "../XText";
import PropTypes from "prop-types";
import {x10, x6} from "../helper/Dimens";

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
            margin: x6,
        },
        cancelStyle: {
            color: 'gray',
            margin: x6,
        },
        viewStyle: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: x10,
            marginEnd: x10
        },
    };

    render() {
        const {okPress, cancelPress, okText, cancelText, okStyle, cancelStyle, viewStyle} = this.props;
        return (
            <View style={viewStyle}>
                <XText type={'high'}
                       touchHighStyle={{margin: x6}}
                       underlayColor={'#F5F6FA'}
                       onPress={cancelPress}
                       textStyle={cancelStyle}
                       text={cancelText}/>
                <XText type={'high'}
                       underlayColor={'#F5F6FA'}
                       touchHighStyle={{margin: x6}}
                       onPress={okPress}
                       textStyle={okStyle}
                       text={okText}/>
            </View>
        )
    }

}
