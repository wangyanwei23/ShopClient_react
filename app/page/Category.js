//分类界面
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var Category = React.createClass({
    render: function() {
        return (
                <View style={styles.container}>
                    <Text style={styles.text}>分类界面</Text>
                </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
    },
});

module.exports = Category;
