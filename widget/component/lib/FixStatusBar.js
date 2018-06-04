import React, {Component} from "react";
import {NativeModules, Platform} from "react-native";
import PropTypes from "prop-types";

const FixStatusBarManager = NativeModules.StatusBarUtil;

export default class FixStatusBar extends Component {
    static updateImmediate = null;
    static propTypes = {
        barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    };

    static defaultProps = {
        barStyle: 'dark-content',
    };

    componentDidMount() {
        this.updatePropsStack(this.props.barStyle);
    }

    componentWillUnmount() {
        this.updatePropsStack('default');
    }

    componentDidUpdate() {
        this.updatePropsStack(this.props.barStyle);
    }


    updatePropsStack = (barStyle) => {
        if (Platform.OS !== 'android') return;
        clearImmediate(FixStatusBar.updateImmediate);
        FixStatusBar.updateImmediate = setImmediate(() => {
            FixStatusBarManager.fixStatusBar(barStyle);
        });
    };

    render() {
        return null;
    }
}

