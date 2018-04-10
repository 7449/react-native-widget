import {Dimensions, StatusBar} from 'react-native';
import {isAndroid} from "./StringUtils";
import {ifIphoneX} from "react-native-iphone-x-helper";

export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;


const DEFAULT_DENSITY = 2;
const w2 = 380 / DEFAULT_DENSITY;

export const fixStatusBarHeight = isAndroid() ? 0 : ifIphoneX(44, 20);
export const height = screenH - StatusBar.currentHeight;
export const width = screenW;

export const size = (size: Number) => {
    const scaleWidth = screenW / w2;
    size = Math.round((size * scaleWidth + 0.5));
    return size / DEFAULT_DENSITY;
};
