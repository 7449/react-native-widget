import React, {Component} from "react";
import PropTypes from "prop-types";
import {EMPTY, ERROR, isNull, LOADING, NORMAL, SUCCESS} from "./helper/StringUtils";
import XText from "./XText";
import {ActivityIndicator, Image, View} from "react-native";
import XTouchOpacityView from "./XTouchOpacityView";

export default class XStatusView extends Component {

    static propTypes = {
        status: PropTypes.string,
        onEmptyPress: PropTypes.func,
        onErrorPress: PropTypes.func,
        loadingColor: PropTypes.string,

        emptyImage: PropTypes.any,
        errorImage: PropTypes.any,

        normalView: PropTypes.element,
        errorView: PropTypes.element,
        emptyView: PropTypes.element,
        loadingView: PropTypes.element,

        errorText: PropTypes.string,
        emptyText: PropTypes.string,
        loadingText: PropTypes.string,

        normalStyle: PropTypes.any,
        emptyStyle: PropTypes.any,
        errorStyle: PropTypes.any,
        loadingStyle: PropTypes.any,
    };

    static defaultProps = {
        status: NORMAL,
        loadingColor: 'gray',
        errorText: '出现错误',
        emptyText: '数据为空',
        loadingText: '正在加载',
        emptyImage: require('./ximage/icon_net_empty.png'),
        errorImage: require('./ximage/icon_net_error.png'),

        normalStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
        emptyStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
        errorStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
        loadingStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
    };

    render() {
        const {status, errorView, emptyView, normalView, loadingView, children} = this.props;
        switch (status) {
            case NORMAL:
                return isNull(normalView) ? this.getNormalView() : normalView;
            case EMPTY:
                return isNull(emptyView) ? this.getEmptyView() : emptyView;
            case ERROR:
                return isNull(errorView) ? this.getErrorView() : errorView;
            case LOADING:
                return isNull(loadingView) ? this.getLoadingView() : loadingView;
            case SUCCESS:
                return children;
            default:
                return null;
        }
    }


    getEmptyView = () => {
        return <View style={this.props.emptyStyle}>
            <XTouchOpacityView onPress={this.props.onEmptyPress}>
                <Image source={this.props.emptyImage}/>
                <XText disabled={true} text={this.props.emptyText} textStyle={{textAlign: 'center'}}/>
            </XTouchOpacityView>
        </View>
    };
    getNormalView = () => {
        return <View style={this.props.normalStyle}>
        </View>;
    };
    getErrorView = () => {
        return <View style={this.props.errorStyle}>
            <XTouchOpacityView onPress={this.props.onErrorPress}>
                <Image source={this.props.errorImage}/>
                <XText disabled={true} text={this.props.errorText} textStyle={{textAlign: 'center'}}/>
            </XTouchOpacityView>
        </View>;
    };
    getLoadingView = () => {
        return <View style={this.props.loadingStyle}>
            <ActivityIndicator
                animating={true}
                color={this.props.loadingColor}
                size="large"
            />
            <XText disabled={true} text={this.props.loadingText}/>
        </View>;
    };
}
