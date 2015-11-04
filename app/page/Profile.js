//个人中心界面
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var Profile = React.createClass({
    render: function() {
        return (
                <View style={styles.container}>
                    <Text style={styles.text}>个人中心界面</Text>
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

module.exports = Profile;
