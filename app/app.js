//根据页面
import React ,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Platform
} from 'react-native';

import Splash from './pages/splash'; //
import { NaviGoBack } from './utils/goBackUtil';

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25);
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19;

var _navigator;

//初始化路由 == 函数renderScene(route,navigator)参数中的route //
let initialRoute = {
    component:Splash,  //路由组件
    params:{         //路由参数
        name:'Splash'
    },
    type:''     //动画类型
}
class App extends  Component {
    constructor(props) {
        super(props);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    //返回
    goBack = ()=> {
        return NaviGoBack(_navigator);
    }
    //场景配置  滑动动画
    configureScene(route,routeStack){
        return Navigator.SceneConfigs.PushFromRight;    
    }
    //渲染场景
    renderScene(route,navigator){
        _navigator = navigator;
        return (
            <route.component navigator = {navigator}  { ...route.params }/>
        )
    }
    render() {       
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    style={{height: STATUS_BAR_HEIGHT}}/>   
                             
                <Navigator 
                    initialRoute = {initialRoute}
                    configureScene ={this.configureScene}
                    renderScene = {this.renderScene}
                    />
            </View>    
        );
    }
}


export default App;