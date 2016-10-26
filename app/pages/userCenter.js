'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ScrollView,
    AsyncStorage
} from 'react-native';

import CenterItem from '../components/CenterItem';
import Login from './login';
// import Address from './CenterContent/Address';
import { connect } from 'react-redux';
// import { userCenterAction } from '../actions/userCenterAction';
import Loading from '../components/Loading';

var {height,width} =  Dimensions.get('window');

class UserCenter extends Component {
    constructor(props) {
        super(props);
    }
 


    //退出登录
    _loginOut = ()=>{
        const {navigator} = this.props;
        AsyncStorage.clear().then((result)=>{
            console.log(result);
            navigator.push({
                component: Login,
                name: 'Login'
                });
            }
        )
        // .catch((error)=>{
        //     console.log(' error:' + error.message);
        // })
    }


    render() {
             return (
                  <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                     <View>
                       <Image style={{width:width,height:100,resizeMode:'stretch',justifyContent:'center'}} source={require('../imgs/pp_center_bg.png')}>
                         <View style={{flexDirection:'row',height:100,}}>
                            <TouchableOpacity  >
                                <Image  style={{width:70,height:70,marginLeft:10,marginTop:15,borderRadius:35}} source={require('../imgs/img.png')}>
                                </Image>
                            </TouchableOpacity>
                            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:10}}>
                               <Text style={{fontSize:16,marginBottom:10,color:'white'}}>123123123</Text>
                               <View style={{flexDirection:'row'}}>
                                  <View style={{width:60,height:18,backgroundColor:'#000',opacity:0.6,borderRadius:9}}>
                                    <Text style={{color:'#fff',fontSize:12,textAlign:'center',}}>
                                     普通会员
  
                                     </Text>
                                  </View>
                               </View>
                            </View>
                         </View>
                       </Image>
                     </View>
                     {/* <TouchableOpacity style={{height:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:16,marginBottom:10}}>
                       <View>
                         <View style={{flexDirection:'row'}}><Text style={{fontSize:16}}>当前余额：</Text><Text style={{fontSize:16,color:'#FF9402'}}>{center.data.wallet.data.balance}</Text></View>
                       </View>
                       <View style={{height:48,width:112,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                         <Text style={{fontSize:16,color:'#797979',marginRight:10}}>充值</Text>
                         <View><Image style={{width:7,height:12}} source={require('../imgs/pp_right.png')}></Image></View>
                       </View>
                     </TouchableOpacity> */}
                     <TouchableOpacity style={{height:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:16,marginBottom:1}}>
                       <View>
                         <View style={{flexDirection:'row'}}><Text style={{fontSize:16}}>我的订单</Text></View>
                       </View>
                       <View style={{height:48,width:112,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                         <Text style={{fontSize:16,color:'#797979'}}>查看全部订单</Text>
                         <View><Image style={{width:7,height:12}} source={require('../imgs/pp_right.png')}></Image></View>
                       </View>
                     </TouchableOpacity>
                     <View style={{flex:1,height:60,flexDirection:'row',alignItems:'center',backgroundColor:'#fff',marginBottom:10}}>
                       <TouchableOpacity style={{flex:1,height:60,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                         <Image style={{width:21,height:17,resizeMode:'stretch',marginBottom:6}} source={require('../imgs/pp_center_dzf.png')}></Image>
                         <Text stlye={{fontSize:12}}>待支付</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flex:1,height:60,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                         <Image style={{width:20,height:20,resizeMode:'stretch',marginBottom:6}} source={require('../imgs/pp_center_dfh.png')}></Image>
                         <Text stlye={{fontSize:12}}>待发货</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flex:1,height:60,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                         <Image style={{width:19,height:19,resizeMode:'stretch',marginBottom:6}} source={require('../imgs/pp_center_dsh.png')}></Image>
                         <Text stlye={{fontSize:12}}>待收货</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flex:1,height:60,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                         <Image style={{width:20,height:18,resizeMode:'stretch',marginBottom:6}} source={require('../imgs/pp_center_dpj.png')}></Image>
                         <Text stlye={{fontSize:12}}>待评价</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flex:1,height:60,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                         <Image style={{width:15,height:21,resizeMode:'stretch',marginBottom:6}} source={require('../imgs/pp_center_thh.png')}></Image>
                         <Text stlye={{fontSize:12}}>退换货</Text>
                       </TouchableOpacity>
                     </View>

                     <CenterItem
                        title='个人信息'
                        icon={require('../imgs/pp_center_grxx.png')}
                        />

                     <CenterItem
                        title='账户安全'
                        icon={require('../imgs/pp_center_zhaq.png')}
                        />

                     <CenterItem
                        title='收货地址'
                        icon={require('../imgs/pp_center_shdz.png')}
                        />


                     <TouchableOpacity style={{height:45,width:width,backgroundColor:'white',marginTop:10,justifyContent:'center',}}>
                         <Text style={{alignSelf:'center',color:'#FF240D',fontSize:17}} onPress={this._loginOut}>退出登录</Text>
                     </TouchableOpacity>
                   </ScrollView>
                  </View>
             )
    }
}
const styles=StyleSheet.create({
    top_line:{
        height:1,
        backgroundColor:'#f2f2f2'
    },
    center_line:{
        marginLeft:8,
        marginRight:8,
    },
    modify_item:{
        alignItems:'flex-end',
        flex:1,
        marginRight:10,
        marginTop:15
    }
});
// export default Center;
function mapStateToProps(state) {
    const { userCenter } = state;
    return {
       userCenter
    }
}

export default connect(mapStateToProps)(UserCenter);
