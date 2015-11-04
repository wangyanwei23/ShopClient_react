//首页界面
'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var string = "888";

var {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
} = React;

//轮播
var Slider = React.createClass({
    render: function() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={125} showsPagination={false}>
                <Image style={[styles.slide,]} source={require("image!banner1")}></Image>
                <Image style={[styles.slide,]} source={require("image!putao")}></Image>
            </Swiper>
        );
    },
});

//九宫格－分类按钮
var Buttons = React.createClass({
    render: function() {
        return(
            <View style={styles.buttons}>
                <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={[styles.buttons_flex, {flex: 3}]}>
                            <Image style={styles.buttons_icon} source={require("image!tupian4")}></Image>
                        </View>
                        <View style={[styles.buttons_flex, {flex: 1}]}>
                            <Text style={styles.buttons_text}>啤酒</Text>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={[styles.buttons_flex, {flex: 3}]}>
                            <Image style={styles.buttons_icon} source={require("image!tupian3")}></Image>
                        </View>
                        <View style={[styles.buttons_flex, {flex: 1}]}>
                            <Text style={styles.buttons_text}>白酒</Text>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={[styles.buttons_flex, {flex: 3}]}>
                            <Image style={styles.buttons_icon} source={require("image!tupian2")}></Image>
                        </View>
                        <View style={[styles.buttons_flex, {flex: 1}]}>
                            <Text style={styles.buttons_text}>红酒</Text>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={[styles.buttons_flex, {flex: 3}]}>
                            <Image style={styles.buttons_icon} source={require("image!tupian1")}></Image>
                        </View>
                        <View style={[styles.buttons_flex, {flex: 1}]}>
                            <Text style={styles.buttons_text}>洋酒</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    },
});

//九宫格－促销活动组件
var Component = React.createClass({
    render: function() {
        return (
            <View style={styles.component}>
                <View style={styles.component_title}>
                    <Text style={styles.CT_text}>促销活动</Text>
                    <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                        <View style={styles.CT_button}>
                            <Text style={{fontSize: 8, color: 'white'}}>更多惊喜</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.component_content}>
                    <View style={styles.component_view}>
                        <View style={{flex: 1}}>
                            <Image style={styles.component_icon} source={require("image!jiu")}></Image>
                        </View>
                        <View style={{flex: 1, marginTop: 10, marginRight: 10,}}>
                            <Text style={{fontSize: 10,}}>精品威士忌</Text>
                            <Text style={{fontSize: 8, marginTop: 3,}}>原价：¥{string}</Text>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 3,}}>
                                <Text style={{fontSize: 8,}}>促销价：</Text>
                                <Text style={{fontSize: 9, color: 'red', marginTop: -2,}}>¥366</Text>
                            </View>
                            <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                                <View style={styles.CT_button1}>
                                    <Text style={{fontSize: 8, color: 'white', fontWeight: 'bold',}}>立即抢购</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.component_view}>
                        <View style={{flex: 1}}>
                            <Image style={styles.component_icon} source={require("image!jiu")}></Image>
                        </View>
                        <View style={{flex: 1, marginTop: 10, marginRight: 10,}}>
                            <Text style={{fontSize: 10,}}>精品威士忌</Text>
                            <Text style={{fontSize: 8, marginTop: 3,}}>原价：¥{string}</Text>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 3,}}>
                                <Text style={{fontSize: 8,}}>促销价：</Text>
                                <Text style={{fontSize: 9, color: 'red', marginTop: -2,}}>¥366</Text>
                            </View>
                            <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                                <View style={styles.CT_button1}>
                                    <Text style={{fontSize: 8, color: 'white', fontWeight: 'bold',}}>立即抢购</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    },
});

var Home = React.createClass({
    render: function() {
        return (
            <ScrollView style={styles.container}>
                <Slider/>
                <Buttons/>
                <Component/>
                <Text style={styles.text}>首页</Text>
            </ScrollView>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 68,
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
    },

    slide: {
        height: 125,
        resizeMode: Image.resizeMode.stretch,
    },

    buttons: {
        height: 70,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
    },

    buttons_icon: {
        height: 40,
        width: 40,
        resizeMode: Image.resizeMode.cover,
    },

    buttons_flex: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttons_text: {
        marginTop: -5,
        fontSize: 13,
        color: '#474747',
    },

    // 促销活动——组件
    component: {
        height: 100,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#B0B0B0",
        marginTop: 5,
    },

    //促销活动——标题区域
    component_title: {
        flex: 1,
        //height: 13,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        //marginBottom: 10,
        borderLeftWidth: 1,
        borderColor: "#EE0000",
        flexDirection: 'row',
        //backgroundColor: "#1C86EE",
    },

    //CT = component_title  "促销活动"文本
    CT_text: {
        flex: 4,
        fontSize: 10,
        marginLeft: 3,
    },

    // "更多惊喜"按钮
    CT_button: {
        flex: 1,
        //height: 10,
        backgroundColor: "#9400D3",
        justifyContent: 'center',
        alignItems: 'center',
    },

    CT_button1: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },

    //促销活动——主要内容区域
    component_content: {
        flex: 7,
        marginTop: 5,
        marginBottom: 5,
        //marginLeft: 10,
        //marginRight: 10,
        //backgroundColor: "#9400D3",
        flexDirection: 'row',
    },

    //促销活动——二分之一区域
    component_view: {
        flex: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#B0B0B0",
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
    },

    component_icon: {
        resizeMode: Image.resizeMode.stretch,
        width: 50,
        height: 60,
        marginLeft: 5,
        marginTop: 10,
    },
});

module.exports = Home;
