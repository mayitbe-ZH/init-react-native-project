import React ,{Component} from 'react';
import {Text,View,Alert,TextInput,InteractionManager,Image,StyleSheet,AsyncStorage} from 'react-native';

import { connect } from 'react-redux';

import {selectedTab} from '../actions/appMainAction' ;
import TabNavigator from 'react-native-tab-navigator';

import Home from './home';
// import Fav from './fav';
// import Order from './Order';
import Cart from './shoppingCart';
import UserCenter from './userCenter';
import Login from './login';

class AppMain extends Component {
    constructor(props) {
        super(props);  

    }
    //登录检测
    _checkLogin = (tag)=>{
        const {dispatch} = this.props;
        AsyncStorage.getItem('token').then((result)=>{
            if (result === null){
                Alert.alert('温馨提醒','您还没有登录！',
                [
                    {text: '取消', onPress: () => console.log('Cancel!')},
                    {text: '去登录', onPress: () => this.goLogin()}
                ])
            }else {
                console.log(result);
                dispatch(selectedTab(tag))
                // dispatch(performCenterAction(result));
            }}).catch((error)=>{
                console.log(' error:' + error);
        })
    }
    goLogin = ()=>{
        console.log('login');
        this.props.navigator.push({
            component: Login
        });        
    }
    render() {
        const {appMain,dispatch} = this.props;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selectedTitleStyle={styles.selectedTextStyle} //选择后的样式
                    titleStyle={styles.textStyle}  //默认样式
                    selected={appMain.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../imgs/a1.png')} style={styles.homeIcon}/>}
                    renderSelectedIcon={() => <Image source={require('../imgs/a2.png')} style={styles.homeIcon}/>}
                    onPress={() => dispatch(selectedTab('home'))}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    selected={appMain.selectedTab === 'fav'}
                    title="fav"
                    renderIcon={() => <Image source={require('../imgs/c1.png')} style={styles.favIcon}/>}
                    renderSelectedIcon={() => <Image source={require('../imgs/c2.png')} style={styles.favIcon}/>}
                    onPress={() => {this._checkLogin('fav')}}>
                    <Home {...this.props}/>
                </TabNavigator.Item>                
                <TabNavigator.Item
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    selected={appMain.selectedTab === 'cart'}
                    title="cart"
                    renderIcon={() => <Image source={require('../imgs/b1.png')} style={styles.cartIcon}/>}
                    renderSelectedIcon={() => <Image source={require('../imgs/b2.png')} style={styles.cartIcon}/>}
                    onPress={() => {this._checkLogin('cart')}}>
                    <Cart {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    selected={appMain.selectedTab === 'user'}
                    title="user"
                    renderIcon={() => <Image source={require('../imgs/d1.png')} style={styles.userIcon}/>}
                    renderSelectedIcon={() => <Image source={require('../imgs/d2.png')} style={styles.userIcon}/>}
                    onPress={()=>{this._checkLogin('user')}}>
                    <UserCenter {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}

const styles = StyleSheet.create({
    homeIcon:{height:22,width:24},
    cartIcon:{height:22,width:25},
    favIcon:{height:22,width:23},
    userIcon:{height:22,width:23},
    iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:'#757575',
   },
   selectedTextStyle:{
       color:'red',
   }
})
//这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。 
function mapStateToProps(state) {
    const { appMain } = state;
    console.log(appMain);
    return {
        appMain
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
export default connect(mapStateToProps)(AppMain);