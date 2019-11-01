import React from "react";
import {XBackComponent, XLoadingView, XText} from "../../widget/component/index";
import {View} from "react-native";
import {itemStyle} from "./Style";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXLoadingScreen extends XBackComponent {

    state = {
        visibility: false,
    };

    render() {
        return (
            <View style={{paddingTop: fixStatusBarHeight}}>
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

