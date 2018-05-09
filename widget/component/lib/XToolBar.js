import React, {Component} from "react";
import {StatusBar, View} from "react-native";
import PropTypes from "prop-types";
import {x10, x100, x48} from "./helper/Dimens";
import XText from "./XText";
import {isNull} from "./helper/StringUtils";
import XTouchOpacityView from "./XTouchOpacityView";
import XImage from "./XImage";
import {fixStatusBarHeight, width} from "./helper/Screen";

// beta
export default class XToolBar extends Component {

    static propTypes = {
        //customize
        leftView: PropTypes.element,
        centerView: PropTypes.element,
        rightView: PropTypes.element,

        viewStyle: PropTypes.any,
        containerStyle: PropTypes.any,

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

        barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content'])
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


        containerStyle: {},
        viewStyle: {
            flexDirection: 'row',
            height: x48,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        leftStyle: {
            width: x100,
            marginStart: x10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        centerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        rightStyle: {
            width: x100,
            marginEnd: x10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        barStyle: 'default',
    };

    render() {
        const {containerStyle, viewStyle, barStyle, leftView, centerView, rightView, showLeftView, showCenterView, showRightView} = this.props;
        return <View style={[{paddingTop: fixStatusBarHeight, backgroundColor: 'white', width: width}, containerStyle]}>
            <StatusBar barStyle={barStyle}/>
            <View style={viewStyle}>
                {!showLeftView ? this.getEmptyView() : isNull(leftView) ? this.getLeftView() : leftView}
                {!showCenterView ? this.getEmptyView() : isNull(centerView) ? this.getCenterView() : centerView}
                {!showRightView ? this.getEmptyView() : isNull(rightView) ? this.getRightView() : rightView}
            </View>
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
        return <View style={this.props.leftStyle}>
            <XTouchOpacityView
                disabled={leftDisabled}
                activeOpacity={leftActiveOpacity}
                pressTime={leftPressTime}
                pressTimePress={leftPressTimePress}
                onPress={leftPress}
                onLongPress={leftLongPress}
                object={leftObject}
                touchOpacityStyle={leftTouchOpacityStyle}>
                <View style={{flexDirection: 'row'}}>
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
        </View>
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
        return <View style={this.props.rightStyle}>
            <XTouchOpacityView
                disabled={rightDisabled}
                activeOpacity={rightActiveOpacity}
                pressTime={rightPressTime}
                pressTimePress={rightPressTimePress}
                onPress={rightPress}
                onLongPress={rightLongPress}
                object={rightObject}
                touchOpacityStyle={rightTouchOpacityStyle}>
                <View style={{flexDirection: 'row'}}>
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
        </View>
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
        return <View style={this.props.centerStyle}>
            <XTouchOpacityView
                disabled={centerDisabled}
                activeOpacity={centerActiveOpacity}
                pressTime={centerPressTime}
                pressTimePress={centerPressTimePress}
                onPress={centerPress}
                onLongPress={centerLongPress}
                object={centerObject}
                touchOpacityStyle={centerTouchOpacityStyle}>
                <View style={{flexDirection: 'row'}}>
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
        </View>
    };
}


