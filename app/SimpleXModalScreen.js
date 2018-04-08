import React from "react";
import {XBackComponent, XModalView, XText} from "../widget/component/index";
import {View} from "react-native";
import {itemStyle} from "./Style";

export default class SimpleXModalScreen extends XBackComponent {

    state = {
        visibility: false,
    };

    render() {
        return (
            <View>
                <XModalView onRequestClose={() => {
                }} visibility={this.state.visibility}>
                    <View style={{backgroundColor: 'white', height: '80%', width: '80%'}}>
                        <XText touchOpacityStyle={itemStyle}
                               onPress={() => this.setState({visibility: !this.state.visibility})}
                               text={'点击消失'}/>
                    </View>
                </XModalView>
                <XText touchOpacityStyle={itemStyle} text={'点击显示ModalView'} onPress={() => {
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

