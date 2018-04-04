import React from "react";
import {StackNavigator} from 'react-navigation'
import App from "./App";
import SimpleXTouchScreen from "./SimpleXTouchScreen";
import SimpleXTextScreen from "./SimpleXTextScreen";
import SimpleXImageScreen from "./SimpleXImageScreen";
import SimpleXCardScreen from "./SimpleXCardScreen";
import SimpleXTextButtonScreen from "./SimpleXTextButtonScreen";


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
    SimpleXCardScreen: {
        screen: SimpleXCardScreen
    },
    SimpleXTextButtonScreen: {
        screen: SimpleXTextButtonScreen
    }
};

const StackNavigatorConfig = {
    headerMode: 'none',
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);