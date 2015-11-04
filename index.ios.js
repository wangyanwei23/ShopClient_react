'use strict';
var React = require('react-native');
var Home = require('./app/page/Home');
var Category = require('./app/page/Category');
var Shopping = require('./app/page/Shopping');
var Profile = require('./app/page/Profile');
var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
    Text,
    View,
} = React;
var ShopClient_react = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'home',
        };
    },

    changeTab: function(TabName) {
        this.setState({
            selectedTab: TabName,
        });
    },

    addNavigator: function(component, title) {
        return (
                <NavigatorIOS
                    style={styles.tabContent}
                    initialRoute={{
                        title: title,
                        component: component,
                    }}
                />
        );
    },

    render: function() {
        return (
                <TabBarIOS>
                    <TabBarIOS.Item
                        icon={require("image!zhuye")}
                        title="首页"
                        onPress={() => this.changeTab('home')}
                        selected={this.state.selectedTab === 'home'}
                        >
                        {this.addNavigator(Home, '首页')}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="分类"
                        icon={require("image!fenlei")}
                        onPress={() => this.changeTab('classify')}
                        selected={this.state.selectedTab === 'classify'}
                        >
                        {this.addNavigator(Category, '分类')}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="购物车"
                        icon={require("image!gouwu")}
                        onPress={() => this.changeTab('shop')}
                        selected={this.state.selectedTab === 'shop'}
                        >
                        {this.addNavigator(Shopping, '购物车')}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="个人中心"
                        icon={require("image!geren")}
                        onPress={() => this.changeTab('profile')}
                        selected={this.state.selectedTab === 'profile'}
                        >
                        {this.addNavigator(Profile, '个人中心')}
                    </TabBarIOS.Item>
                </TabBarIOS>
        );
    },
});
var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        backgroundColor: '#fff232',
       // alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

AppRegistry.registerComponent('ShopClient_react', () => ShopClient_react);
