import React from "react";
import {SimpleModalBottomView, XBackComponent, XModalView, XText} from "../../widget/component/index";
import {View} from "react-native";
import {itemStyle} from "./Style";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXModalScreen extends XBackComponent {

    state = {
        visibility: false,
    };

    render() {
        return (
            <View style={{paddingTop: fixStatusBarHeight}}>
                <XModalView
                    onPress={() => {
                        console.log('=======================', 'press', '=====================');
                        this.setState({visibility: !this.state.visibility})
                    }}
                    onRequestClose={() => {
                        // android back
                        this.setState({visibility: !this.state.visibility})
                    }}
                    childViewStyle={{
                        flex: 1,
                        marginTop: 100,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    visibility={this.state.visibility}>
                    <View style={{
                        backgroundColor: 'white',
                        justifyContent: 'space-between'
                    }}>
                        <XText touchOpacityStyle={[{height: 50}, itemStyle]}
                               onPress={() => this.setState({visibility: !this.state.visibility})}
                               text={'点击消失'}/>
                        <SimpleModalBottomView cancelPress={() => this.setState({visibility: !this.state.visibility})}
                                               okPress={() => this.setState({visibility: !this.state.visibility})}/>
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

