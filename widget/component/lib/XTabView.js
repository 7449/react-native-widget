import {View} from 'react-native';
import React, {Component} from "react";
import PropTypes from "prop-types";
import {x16, x5, x8} from "./helper/Dimens";
import XText from "./XText";
import XTouchOpacityView from "./XTouchOpacityView";

export default class XTabView extends Component {

    static propTypes = {
        tab: PropTypes.array.isRequired,
        selectIndex: PropTypes.number,
        selectTabTextColor: PropTypes.string,
        unSelectTabTextColor: PropTypes.string,
        selectTabLineColor: PropTypes.string,
        unSelectTabLineColor: PropTypes.string,
        tabStyle: PropTypes.any,
        tabPress: PropTypes.func.isRequired,
    };

    static defaultProps = {
        selectIndex: 0,
        tab: [],

        tabStyle: {
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            padding: x8,
            backgroundColor: 'white',
        },
        selectTabLineColor: 'gray',
        unSelectTabLineColor: 'white',
        selectTabTextColor: 'gray',
        unSelectTabTextColor: 'black',
    };

    render() {
        const {tab, selectIndex, tabStyle, selectTabLineColor, unSelectTabLineColor, selectTabTextColor, unSelectTabTextColor, tabPress} = this.props;
        let tabView = [];
        tab.forEach((key, index) => {
            tabView.push(
                <XTouchOpacityView key={key} onPress={tabPress} object={index}>
                    <XText
                        disabled={true}
                        textStyle={{color: selectIndex === index ? selectTabTextColor : unSelectTabTextColor}}
                        fontSize={x16}
                        text={key}/>
                    <View style={{
                        backgroundColor: selectIndex === index ? selectTabLineColor : unSelectTabLineColor,
                        height: 1.5,
                        marginTop: x5,
                    }}/>
                </XTouchOpacityView>
            )
        });
        return <View style={tabStyle}>
            {tabView}
        </View>
    }
}
