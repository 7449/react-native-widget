import React from "react";
import {StackNavigator} from 'react-navigation'
import App from "./App";
import SimpleXTouchScreen from "./SimpleXTouchScreen";
import SimpleXTextScreen from "./SimpleXTextScreen";


const RouteConfigs = {
    Home: {
        screen: App
    },
    SimpleXTouchScreen: {
        screen: SimpleXTouchScreen
    },
    SimpleXTextScreen: {
        screen: SimpleXTextScreen
    },
};

const StackNavigatorConfig = {
    headerMode: 'none',
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);