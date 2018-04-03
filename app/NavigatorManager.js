import React from "react";
import {StackNavigator} from 'react-navigation'
import App from "./App";
import SimpleXTouchScreen from "./SimpleXTouchScreen";
import SimpleXTextScreen from "./SimpleXTextScreen";
import SimpleXImageScreen from "./SimpleXImageScreen";


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
    SimpleXImageScreen: {
        screen: SimpleXImageScreen
    },
};

const StackNavigatorConfig = {
    headerMode: 'none',
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);