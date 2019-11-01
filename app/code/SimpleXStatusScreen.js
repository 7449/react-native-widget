import React from "react";
import {View} from "react-native";
import {XBackComponent, XStatusView, XText} from "../../widget/component/index";
import {EMPTY, ERROR, LOADING, NORMAL, SUCCESS} from "../../widget/component/lib/helper/StringUtils";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXStatusScreen extends XBackComponent {

    state = {
        status: EMPTY,
    };

    render() {
        return <View style={{flex: 1, paddingTop: fixStatusBarHeight, paddingBottom: fixStatusBarHeight}}>
            <XStatusView status={this.state.status} normalView={this.getNormalView()}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <XText text={SUCCESS}/>
                </View>
            </XStatusView>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                <XText textStyle={{backgroundColor: 'gray', margin: 10}} text={NORMAL} onPress={() => {
                    this.setState({status: NORMAL})
                }}/>
                <XText textStyle={{backgroundColor: 'gray', margin: 10}} text={EMPTY} onPress={() => {
                    this.setState({status: EMPTY})
                }}/>
                <XText textStyle={{backgroundColor: 'gray', margin: 10}} text={LOADING} onPress={() => {
                    this.setState({status: LOADING})
                }}/>
                <XText textStyle={{backgroundColor: 'gray', margin: 10}} text={SUCCESS} onPress={() => {
                    this.setState({status: SUCCESS})
                }}/>
                <XText textStyle={{backgroundColor: 'gray', margin: 10}} text={ERROR} onPress={() => {
                    this.setState({status: ERROR})
                }}/>
            </View>
        </View>
    }

    getNormalView = () => {
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <XText text={'NORMAL'}/>
        </View>;
    };

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

