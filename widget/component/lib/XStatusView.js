import React, {Component} from "react";
import PropTypes from "prop-types";
import {EMPTY, ERROR, LOADING, NORMAL, SUCCESS} from "./helper/StringUtils";
import XText from "./XText";
import {ActivityIndicator, View} from "react-native";

export default class XStatusView extends Component {

    static propTypes = {
        status: PropTypes.string,
        onEmptyPress: PropTypes.func,
        onErrorPress: PropTypes.func,
        loadingColor: PropTypes.string,
    };

    static defaultProps = {
        status: NORMAL,
        loadingColor: 'gray',
    };

    render() {
        const {status, children} = this.props;
        switch (status) {
            case NORMAL:
                return this.getNormalView();
            case EMPTY:
                return this.getEmptyView();
            case ERROR:
                return this.getErrorView();
            case LOADING:
                return this.getLoadingView();
            case SUCCESS:
                return children;
            default:
                return null;
        }
    }


    getEmptyView = () => {
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <XText text={EMPTY}/>
        </View>;
    };
    getNormalView = () => {
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <XText text={NORMAL}/>
        </View>;
    };
    getErrorView = () => {
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <XText text={ERROR}/>
        </View>;
    };
    getLoadingView = () => {
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ActivityIndicator
                animating={true}
                color={this.props.loadingColor}
                size="large"
            />
        </View>;
    };
}
