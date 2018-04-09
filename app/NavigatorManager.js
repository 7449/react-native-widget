import React from "react";
import {StackNavigator} from 'react-navigation'
import App from "./App";
import SimpleXTouchScreen from "./SimpleXTouchScreen";
import SimpleXTextScreen from "./SimpleXTextScreen";
import SimpleXImageScreen from "./SimpleXImageScreen";
import SimpleXCardScreen from "./SimpleXCardScreen";
import SimpleXTextButtonScreen from "./SimpleXTextButtonScreen";
import SimpleXStatusScreen from "./SimpleXStatusScreen";
import SimpleXModalScreen from "./SimpleXModalScreen";
import SimpleXLoadingScreen from "./SimpleXLoadingScreen";
import SimpleXToolBarScreen from "./SimpleXToolBarScreen";
import SimpleXFlatListScreen from "./SimpleXFlatListScreen";
import SimpleXSectionListScreen from "./SimpleXSectionListScreen";


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
    },
    SimpleXStatusScreen: {
        screen: SimpleXStatusScreen
    },
    SimpleXModalScreen: {
        screen: SimpleXModalScreen
    },
    SimpleXLoadingScreen: {
        screen: SimpleXLoadingScreen
    },
    SimpleXToolBarScreen: {
        screen: SimpleXToolBarScreen
    },
    SimpleXFlatListScreen: {
        screen: SimpleXFlatListScreen
    },
    SimpleXSectionListScreen: {
        screen: SimpleXSectionListScreen
    },
};

const StackNavigatorConfig = {
    headerMode: 'none',
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);