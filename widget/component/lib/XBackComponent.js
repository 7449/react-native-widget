import React, {Component} from 'react';
import {BackHandler} from 'react-native';

export default class XBackComponent extends Component {

    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    UNSAFE_componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        BackHandler.exitApp();
        return false;
    };
}
