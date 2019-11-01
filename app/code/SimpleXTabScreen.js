import React from "react";
import {View} from "react-native";
import {XBackComponent, XText, XTabView, FaceBookViewPager} from "../../widget/component/index";
import {fixStatusBarHeight} from "../../widget/component/lib/helper/Screen";

export default class SimpleXTabScreen extends XBackComponent {
    state = {
        selectIndex: 0,
    };

    render() {
        return <View style={{flex: 1, paddingTop: fixStatusBarHeight}}>
            <XTabView
                tab={['一', '二', '三三三', '四', '五', '六', '七', '八', '九']}
                selectIndex={this.state.selectIndex}
                selectTabLineColor={'red'}
                tabPress={(index) => this.setState({selectIndex: index})}/>
            <FaceBookViewPager
                count={9}
                style={{marginTop: 8}}
                selectedIndex={this.state.selectIndex}
                onSelectedIndexChange={(index) => this.setState({selectIndex: index})}>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
                <XText text={'ViewPager' + this.state.selectIndex}/>
            </FaceBookViewPager>
        </View>
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
}

