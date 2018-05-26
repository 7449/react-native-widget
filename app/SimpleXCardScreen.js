import React from "react";
import {ScrollView} from "react-native";
import {XBackComponent, XCardView, XText} from "../widget/component/index";
import {fixStatusBarHeight} from "../widget/component/lib/helper/Screen";

export default class SimpleXTouchScreen extends XBackComponent {
    state = {
        entity: [
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
            {'item': 'Card'},
        ],
    };

    render() {
        let view = [];
        this.state.entity.forEach((key, index) => {
            view.push(
                <XCardView key={key + index} activeOpacity={0.2}>
                    <XText textStyle={{alignSelf: 'center', padding: 10, margin: 10}} text={key.item}/>
                </XCardView>
            )
        });
        return (
            <ScrollView style={{paddingTop: fixStatusBarHeight}}>
                {view}
            </ScrollView>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

