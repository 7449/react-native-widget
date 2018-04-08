import React from "react";
import {XBackComponent, XLoadingView, XText} from "../widget/component/index";
import {View} from "react-native";
import {itemStyle} from "./Style";

export default class SimpleXLoadingScreen extends XBackComponent {

    state = {
        visibility: false,
    };

    render() {
        return (
            <View>
                <XLoadingView onRequestClose={() => this.setState({visibility: !this.state.visibility})}
                              visibility={this.state.visibility}/>
                <XText touchOpacityStyle={itemStyle} text={'XLoading'} onPress={() => {
                    this.setState({visibility: !this.state.visibility});
                }}/>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

