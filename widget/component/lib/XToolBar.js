import React, {Component} from "react";
import {View} from "react-native";
import PropTypes from "prop-types";
import {x10, x48} from "./helper/Dimens";
import XText from "./XText";
import {isNull} from "./helper/StringUtils";
import XTouchOpacityView from "./XTouchOpacityView";
import XImage from "./XImage";

// beta
export default class XToolBar extends Component {

    static propTypes = {
        //customize
        leftView: PropTypes.element,
        centerView: PropTypes.element,
        rightView: PropTypes.element,

        showLeftView: PropTypes.bool,
        showCenterView: PropTypes.bool,
        showRightView: PropTypes.bool,

        leftStyle: PropTypes.any,
        centerStyle: PropTypes.any,
        rightStyle: PropTypes.any,

        leftIcon: PropTypes.any,
        centerIcon: PropTypes.any,
        rightIcon: PropTypes.any,

        leftIconStyle: PropTypes.any,
        centerIconStyle: PropTypes.any,
        rightIconStyle: PropTypes.any,

        leftText: PropTypes.string,
        leftDisabled: PropTypes.bool,
        leftActiveOpacity: PropTypes.number,
        leftPressTime: PropTypes.number,
        leftPressTimePress: PropTypes.func,
        leftPress: PropTypes.func,
        leftLongPress: PropTypes.func,
        leftObject: PropTypes.object,
        leftTouchOpacityStyle: PropTypes.any,
        leftNumberOfLines: PropTypes.number,
        leftTextStyle: PropTypes.any,
        leftFontSize: PropTypes.number,
        leftFontFamily: PropTypes.string,

        centerText: PropTypes.string,
        centerDisabled: PropTypes.bool,
        centerActiveOpacity: PropTypes.number,
        centerPressTime: PropTypes.number,
        centerPressTimePress: PropTypes.func,
        centerPress: PropTypes.func,
        centerLongPress: PropTypes.func,
        centerObject: PropTypes.object,
        centerTouchOpacityStyle: PropTypes.any,
        centerNumberOfLines: PropTypes.number,
        centerTextStyle: PropTypes.any,
        centerFontSize: PropTypes.number,
        centerFontFamily: PropTypes.string,

        rightText: PropTypes.string,
        rightDisabled: PropTypes.bool,
        rightActiveOpacity: PropTypes.number,
        rightPressTime: PropTypes.number,
        rightPressTimePress: PropTypes.func,
        rightPress: PropTypes.func,
        rightLongPress: PropTypes.func,
        rightObject: PropTypes.object,
        rightTouchOpacityStyle: PropTypes.any,
        rightNumberOfLines: PropTypes.number,
        rightTextStyle: PropTypes.any,
        rightFontSize: PropTypes.number,
        rightFontFamily: PropTypes.string,
    };

    static defaultProps = {
        showLeftView: true,
        showCenterView: true,
        showRightView: true,

        leftDisabled: true,
        centerDisabled: true,
        rightDisabled: true,

        leftText: '',
        centerText: '',
        rightText: '',

        // leftIcon: require('./ximage/icon_temp.png'),
        // centerIcon: require('./ximage/icon_temp.png'),
        // rightIcon: require('./ximage/icon_temp.png'),


        viewStyle: {
            flexDirection: 'row',
            height: x48,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
        },
        leftStyle: {
            marginStart: x10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        centerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        rightStyle: {
            marginEnd: x10,
            flexDirection: 'row',
            alignItems: 'center',
        },
    };


    render() {
        const {viewStyle, leftView, centerView, rightView, showLeftView, showCenterView, showRightView} = this.props;
        return <View style={viewStyle}>
            {!showLeftView ? this.getEmptyView() : isNull(leftView) ? this.getLeftView() : leftView}
            {!showCenterView ? this.getEmptyView() : isNull(centerView) ? this.getCenterView() : centerView}
            {!showRightView ? this.getEmptyView() : isNull(rightView) ? this.getRightView() : rightView}
        </View>;
    }

    getEmptyView = () => {
        return <View/>
    };

    getLeftView = () => {
        const {
            leftText,
            leftDisabled,
            leftActiveOpacity,
            leftPressTime,
            leftPressTimePress,
            leftPress,
            leftLongPress,
            leftObject,
            leftTouchOpacityStyle,
            leftNumberOfLines,
            leftTextStyle,
            leftFontSize,
            leftFontFamily,

            leftIcon,
            leftIconStyle,
        } = this.props;
        return <XTouchOpacityView
            disabled={leftDisabled}
            activeOpacity={leftActiveOpacity}
            pressTime={leftPressTime}
            pressTimePress={leftPressTimePress}
            onPress={leftPress}
            onLongPress={leftLongPress}
            object={leftObject}
            touchOpacityStyle={leftTouchOpacityStyle}>
            <View style={this.props.leftStyle}>
                <XImage icon={leftIcon} imageStyle={leftIconStyle} disabled={true}/>
                <XText
                    disabled={true}
                    numberOfLines={leftNumberOfLines}
                    textStyle={leftTextStyle}
                    fontSize={leftFontSize}
                    fontFamily={leftFontFamily}
                    text={leftText}/>
            </View>
        </XTouchOpacityView>
    };

    getRightView = () => {
        const {
            rightText,
            rightDisabled,
            rightActiveOpacity,
            rightPressTime,
            rightPressTimePress,
            rightPress,
            rightLongPress,
            rightObject,
            rightTouchOpacityStyle,
            rightNumberOfLines,
            rightTextStyle,
            rightFontSize,
            rightFontFamily,

            rightIcon,
            rightIconStyle,
        } = this.props;
        return <XTouchOpacityView
            disabled={rightDisabled}
            activeOpacity={rightActiveOpacity}
            pressTime={rightPressTime}
            pressTimePress={rightPressTimePress}
            onPress={rightPress}
            onLongPress={rightLongPress}
            object={rightObject}
            touchOpacityStyle={rightTouchOpacityStyle}>
            <View style={this.props.rightStyle}>
                <XImage icon={rightIcon} imageStyle={rightIconStyle} disabled={true}/>
                <XText
                    disabled={true}
                    numberOfLines={rightNumberOfLines}
                    textStyle={rightTextStyle}
                    fontSize={rightFontSize}
                    fontFamily={rightFontFamily}
                    text={rightText}/>
            </View>
        </XTouchOpacityView>
    };

    getCenterView = () => {
        const {
            centerText,
            centerDisabled,
            centerActiveOpacity,
            centerPressTime,
            centerPressTimePress,
            centerPress,
            centerLongPress,
            centerObject,
            centerTouchOpacityStyle,
            centerNumberOfLines,
            centerTextStyle,
            centerFontSize,
            centerFontFamily,

            centerIcon,
            centerIconStyle,
        } = this.props;
        return <XTouchOpacityView
            disabled={centerDisabled}
            activeOpacity={centerActiveOpacity}
            pressTime={centerPressTime}
            pressTimePress={centerPressTimePress}
            onPress={centerPress}
            onLongPress={centerLongPress}
            object={centerObject}
            touchOpacityStyle={centerTouchOpacityStyle}>
            <View style={this.props.centerStyle}>
                <XImage icon={centerIcon} imageStyle={centerIconStyle} disabled={true}/>
                <XText
                    disabled={true}
                    numberOfLines={centerNumberOfLines}
                    textStyle={centerTextStyle}
                    fontSize={centerFontSize}
                    fontFamily={centerFontFamily}
                    text={centerText}/>
            </View>
        </XTouchOpacityView>
    };
}


