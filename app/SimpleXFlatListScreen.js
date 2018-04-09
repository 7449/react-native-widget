import React from "react";
import {View} from "react-native";
import {XBackComponent, XCardView, XFlatList, XText, XTextButton} from "../widget/component/index";
import {EMPTY, LOADING, NORMAL, SUCCESS} from "../widget/component/lib/helper/StringUtils";
import {height} from "../widget/component/lib/helper/Screen";

export default class SimpleXFlatListScreen extends XBackComponent {
    state = {
        refreshing: false,
        emptyStatus: NORMAL,
        loadMoreStatus: NORMAL,
        entity: [],
    };

    componentDidMount() {
        this.setState({refreshing: true}, () => this.onRefresh());
    }

    render() {
        return (
            <View>
                <XFlatList
                    data={this.state.entity}
                    emptyStatus={this.state.emptyStatus}
                    emptyText={this.state.emptyStatus === EMPTY ? '数据为空' : '网络错误'}
                    emptyIcon={this.state.emptyStatus === EMPTY ? require('../widget/component/lib/ximage/icon_net_empty.png') : require('../widget/component/lib/ximage/icon_net_error.png')}
                    emptyPress={() => {
                        console.log("================", '点击重试', "=======================");
                    }}
                    keyExtractor={(item, index) => item + index}
                    // ItemSeparatorComponent={this.getSeparatorView()}
                    // ListHeaderComponent={this.getHeaderView()}
                    // ListFooterComponent={this.getFooterView()}
                    // ListEmptyComponent={this.getEmptyView()}
                    // refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh.bind(this)}
                    onLoadMore={this.onLoadMore.bind(this)}
                    loadMoreStatus={this.state.loadMoreStatus}
                    loadMorePress={() => {
                        console.log("================", '点击重试', "=======================");
                    }}
                    renderItem={(item) => this.getItemView(item)}/>
            </View>
        )
    }

    onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {
            this.setState({
                refreshing: false,
                emptyStatus: SUCCESS,
                entity: this.concatData('Refresh'),
            });
        }, 3000);
    };

    onLoadMore = () => {
        this.setState({
            refreshing: false,
            emptyStatus: SUCCESS,
            loadMoreStatus: LOADING,
            // entity: this.concatData('LoadMore'),
        });
    };

    getHeaderView = () => {
        if (this.state.emptyStatus === NORMAL) {
            return <View style={{alignItems: 'center', justifyContent: 'center'}}/>
        }
        return <View style={{alignItems: 'center'}}><XText text={'header'}/></View>
    };

    getFooterView = () => {
        return <View style={{alignItems: 'center'}}><XText text={'footer'}/></View>
    };

    getSeparatorView = () => {
        return <View style={{backgroundColor: 'gray', height: 2, width: '100%'}}/>
    };

    getEmptyView = () => {
        if (this.state.emptyStatus === NORMAL) {
            return <View style={{height: height, alignItems: 'center', justifyContent: 'center'}}/>
        }
        return <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <XTextButton imageOption={'bottom'}
                         text={'EMPTY'}
                         icon={require('../image/avatar.png')}
                         textStyle={{textAlign: 'center'}}
                         onPress={this.props.emptyPress}/>
        </View>
    };

    getItemView = (item) => {
        return <XCardView>
            <XText textStyle={{alignSelf: 'center', padding: 10, margin: 10}}
                   text={item.item.item + item.index}/>
        </XCardView>
    };

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    };


    concatData = (type) => {
        if (this.state.entity.length > 50) {
            return this.state.entity;
        }
        return this.state.entity.concat([
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
            {'item': `${type}`},
        ]);
    }
}

