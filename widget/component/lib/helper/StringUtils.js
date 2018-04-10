import {Platform} from "react-native";

export const isNull = (text) => {
    return text === null || typeof (text) === 'undefined';
};

export const isEmpty = (text) => {
    return isNull(text) || text === '';
};

export const isAndroid = () => {
    return Platform.OS === 'android'
};

export const ERROR = 'ERROR';
export const EMPTY = 'EMPTY';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const NORMAL = 'NORMAL';
export const LOAD_MORE_EMPTY = 'LOAD_MORE_EMPTY';
