import React, {Component} from 'react';
import {BackHandler} from 'react-native';

export default class XBackComponent extends Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        BackHandler.exitApp();
        return false;
    };
}
