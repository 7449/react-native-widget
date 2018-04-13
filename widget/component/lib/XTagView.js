import React, {Component} from "react";
import PropTypes from "prop-types";
import XText from "./XText";
import {x10, x14, x5} from "./helper/Dimens";
import {View} from "react-native";

export default class XTagView extends Component {

    static propTypes = {
        viewStyle: PropTypes.any,
        text: PropTypes.string,
        textStyle: PropTypes.any,
        fontSize: PropTypes.number,
    };

    static defaultProps = {
        viewStyle: {
            backgroundColor: 'red',
            borderRadius: 8,
            width: x14,
            height: x14,
            top: x5,
            right: x10,
            position: 'absolute',
        },
        textStyle: {
            textAlign: 'center',
            color: 'white',
        },
        fontSize: x10,
    };

    render() {
        const {viewStyle, textStyle, text, fontSize} = this.props;
        return <View style={viewStyle}>
            <XText
                text={text}
                fontSize={fontSize}
                textStyle={textStyle}
                disabled={true}/>
        </View>
    }
}
