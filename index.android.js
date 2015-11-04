var React = require('react-native');
var {
    AppRegistry,
    View,
    Text,
    WebView,
    AsyncStorage
} = React;

//是否开启真实的定位；如果开启了_GEO_OPEN，_GEO_TEST_POS则会失效
_GEO_OPEN = true;
//模拟定位数据
_GEO_TEST_POS = '121.390686,31.213976';

//高亮
StatusBarIOS.setStyle('light-content');
//开启网络状态
StatusBarIOS.setNetworkActivityIndicatorVisible(true);

var ShopClient_react = React.createClass({
    getInitialState: function(){
        return{
            url: null
        };
    },
    render: function(){
        var webView = null;
        if(this.state.url){
            webView = <WebView url={this.state.url}/>
        }
        return(
                <View style={{flex:1}}>
                {webView}
            </View>
        );
    },
    componentDidMount: function(){
        var that = this;
        AsyncStorage.multiGet(['_' + that.props.type, 'pos'], function(err, result){
            if(!err){
                var pos = result[1][1];
                var markers = result[0][1];
                var url = 'http://vczero.github.io/webview/index.html?';
                if(_GEO_OPEN){
                    url += 'pos=' + pos + '&markers=' + markers;
                }else{
                    url += 'pos=' + _GEO_TEST_POS + '6&markers=' + markers;
                }
                that.setState({
                    url: url
                });
            }else{
                alert('定位失败');
            }
        });
    }
});

AppRegistry.registerComponent('ShopClient_react', () => ShopClient_react);
