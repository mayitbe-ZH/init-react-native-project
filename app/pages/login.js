'use strict';
import React, {Component,PropTypes} from 'react';
import{
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    InteractionManager,
    TextInput,
    Platform,
    AsyncStorage
} from 'react-native';

import { NaviGoBack } from '../utils/goBackUtil';

import { toastShort } from '../utils/toastUtil';
// import {NativeModules} from 'react-native';
// import Center from '../Center';
// var EncryptionModule = NativeModules.EncryptionModule;

import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';
// import { performCenterAction } from '../../actions/CenterAction';

var username = '';
var password = '';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    // // const {navigator} = this.props;

    // }

    // componentWillMount() {
    //     // if (Platform.OS === 'android') {
    //     //   BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    //     // }
    // }
    shouldComponentUpdate(nextProps, nextState) {
        const {login,navigator} = this.props;
        console.log(nextProps,'nextProps')
        if (nextProps.login.isLogin === true && nextProps.login.isLogin != login.isLogin) { 
            AsyncStorage.setItem('token',nextProps.login.result.token).then(()=>{
                console.log('token保存成功');    
                navigator.pop();
                return false

            }).catch((error)=>{
                console.log('token保存失败:' + error);
                return true
            });
        }
        return true
    }
    onBackAndroid = () => {
        const { navigator } = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);
        return true;//默认行为

    }

    //返回
    buttonBackAction =()=>{
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }
    goLogin = ()=>{
        const {navigator,dispatch,login} = this.props;
        console.log(username,password)
        if (username === '' || password === '') {
            toastShort('账号或密码不能为空...');
            return 
        }
        console.log('go');
        dispatch(loginAction(username,password));
    }
    render() {
        const {login} = this.props;
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={styles.topbar_bg}>
                    <View style={styles.topbar_left_item}></View>

                    <View style={styles.topbar_center_bg}>
                       <Text style={styles.topbar_center_tv}>登录</Text>
                    </View>

                    <View style={{width:48}}></View>
                </View>
                <View style={{backgroundColor:'#fff',marginTop:48,paddingHorizontal:20}}>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text>用户名</Text>
                          <TextInput
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="邮箱"
                            placeholderTextColor="#CBCBCB"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'username'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text)=>{username = text}}
                      />
                    </View>

                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text>密 码</Text>
                          <TextInput
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="请输入密码"
                            placeholderTextColor="#CBCBCB"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'password'}
                            multiline={true}
                            secureTextEntry={true}
                            onChangeText={(text)=>{password = text}}
                           />
                    </View>

                </View>
                <TouchableOpacity onPress={this.goLogin}  
                                  style={{justifyContent:'center',marginTop:13,alignItems:'center'}}>
                    <View style={{width:300,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'#F2F2F2'}}>
                          <Text>登录</Text>
                    </View>
                </TouchableOpacity>

                <Loading visible={login.status === 'doing'} />

             </View>
        );
    }
}
const styles=StyleSheet.create({
    item_layout:{
        backgroundColor:'white',
        height:48,
        justifyContent:'center'
    },
    topbar_bg:{
        height:48,
        backgroundColor:'#fff',
        flexDirection:'row'
    },
    topbar_left_item:{
        width:48,
        height:48,
        alignItems:'center',
        justifyContent:'center'
    },
    topbar_center_bg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    topbar_center_tv:{
        fontSize:18,
        color:'#000',
        alignSelf:'center'
    },
    topbar_right_item:{
        width:48,
        height:48,
        alignItems:'center',
        justifyContent:'center'
    },
    topbar_right_tv:{
        fontSize:15,
        color:'white',
        alignSelf:'center'
    }
});

function mapStateToProps(state) {
  const { login } = state;
  console.log(login);
  return {
    login
  }
}

export default connect(mapStateToProps)(Login);
