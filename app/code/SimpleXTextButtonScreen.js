import React from "react";
import {ScrollView} from "react-native";
import {XBackComponent} from "../../widget/component/index";
import XTextButton from "../../widget/component/lib/XTextButton";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXTextButtonScreen extends XBackComponent {

    render() {
        return (
            <ScrollView style={{paddingTop: fixStatusBarHeight}}>
                <XTextButton
                    imageOption={'top'}
                    disabled={true}
                    icon={require('../image/avatar.png')}
                    viewStyle={{width: 150, margin: 10,}}
                    imageStyle={{width: 150, height: 150}}
                    textStyle={{alignSelf: 'center'}}
                    text={'top img'}/>

                <XTextButton
                    imageOption={'bottom'}
                    icon={require('../image/avatar.png')}
                    viewStyle={{width: 150, margin: 10}}
                    imageStyle={{width: 150, height: 150}}
                    textStyle={{alignSelf: 'center'}}
                    text={'bottom img'}/>

                <XTextButton
                    icon={require('../image/avatar.png')}
                    viewStyle={{width: 150, margin: 10, flexDirection: 'row'}}
                    imageStyle={{width: 150, height: 150}}
                    textStyle={{alignSelf: 'center'}}
                    text={'right img'}/>

                <XTextButton
                    imageOption={'bottom'}
                    icon={require('../image/avatar.png')}
                    viewStyle={{width: 150, margin: 10, flexDirection: 'row'}}
                    imageStyle={{width: 150, height: 150}}
                    textStyle={{alignSelf: 'center'}}
                    text={'left img'}/>
            </ScrollView>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

