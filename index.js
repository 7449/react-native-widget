/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import NavigatorManager from "./app/code/NavigatorManager";

AppRegistry.registerComponent(appName, () => NavigatorManager);
