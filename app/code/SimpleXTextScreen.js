import React from "react";
import {StyleSheet, View} from "react-native";
import {XBackComponent, XText} from "../../widget/component/index";
import {itemStyle} from "./Style";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXTextScreen extends XBackComponent {

    render() {
        return (
            <View style={{paddingTop: fixStatusBarHeight}}>
                <View style={itemStyle}>
                    <XText disabled={true} textStyle={styles.content} text={'NO TOUCH XText'}/>
                </View>
                <XText touchOpacityStyle={itemStyle} textStyle={styles.content} text={'Touch Opacity XText'}/>
                <XText underlayColor={'blue'}
                       touchHighStyle={itemStyle}
                       type={'high'} text={'Touch High XText'} textStyle={styles.content}/>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

const styles = StyleSheet.create({
    content: {
        textAlign: 'center',
        fontSize: 18,
    },
});
