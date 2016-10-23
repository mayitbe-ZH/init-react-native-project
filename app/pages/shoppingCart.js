import React ,{Component} from 'react';
import {Text,View,InteractionManager,ScrollView,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

// import {logOut} from '../actions/appMainAction' ;
// import Home from './shoppingCart';
import CommonHeader from '../components/CommonHeader';

export default class Cart extends  Component{
    constructor(props) {
      super(props);
    
    }


    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <CommonHeader title={'商品'} navigator ={this.props.navigator}/>
                <ScrollView>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View style={{height:45,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#e6e6e6'}}>
                            <View style={{justifyContent: 'center',alignItems:'center',width:38}}><Image source={require('../imgs/checkbox_active.png')} style={{height:16,width:16,marginRight:4}}></Image></View>
                            <Text>某某官方旗舰店</Text>  
                        </View>
                        <View style={{flexDirection:'row',height:100,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#e6e6e6'}}>
                            <View style={{justifyContent: 'center',alignItems:'center',width:38}}><Image source={require('../imgs/checkbox_active.png')} style={{height:16,width:16,marginRight:4}}></Image>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../imgs/img.png')} style={{height:80,width:80,marginRight:4}}></Image>
                                <View style={{flex:1,flexDirection:'column',paddingHorizontal:5}}>
                                    <Text numberOfLines={2} style={{height:34}}>全选全选全选全全选全选全选全选全选全选全选全选全选全选选全选</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                                        <View>
                                            <Text style={{color:'red',fontSize:16}}>￥3.00</Text>
                                        </View>
                                        <View>
                                          <View style={{height:26,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                            <TouchableOpacity  style={{width:26,height:26,justifyContent:'center',alignItems:'center',backgroundColor:'#F2F2F2',borderWidth:0.5,borderColor:'#E6E6E6',}}>
                                              <Text style={{fontSize:14}}>-</Text>
                                            </TouchableOpacity>
                                            <View style={{width:36,height:26,justifyContent:'center',alignItems:'center',borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#E6E6E6'}}>
                                              <Text style={{fontSize:14,textAlign:'center',}}>
                                                12
                                              </Text>
                                            </View>
                                            <TouchableOpacity  style={{width:26,height:26,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#E6E6E6',}}>
                                              <Text style={{fontSize:14}}>+</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                              <Image style={{height:18,width:18,marginLeft:14}} source={require('../imgs/del.png')}></Image>
                                            </TouchableOpacity>
                                          </View>
                                        </View>
                                    </View>
                                </View>
                            </View>                          
                        </View>

                        <View style={{flexDirection:'row',justifyContent:'flex-end',height:35,alignItems:'center',paddingRight:10}}>
                            <Text style={{fontSize:12}}>总共2个商品 合计金额720元</Text>
                        </View>
                    </View>
                </ScrollView>  
                <View style={{height:50,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',borderTopWidth:0.5,borderTopColor:'#e6e6e6'}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                            <Image source={require('../imgs/checkbox_active.png')} style={{height:16,width:16,marginRight:4}}></Image>
                            <Text>全选</Text>
                        </View>      
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <Text>合计(2):<Text style={{color:'red'}}>￥6.00</Text></Text>      
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',backgroundColor:'red',height:50,alignItems:'center'}}>
                        <Text style={{color:'#ffffff'}}>结算(2)</Text>      
                    </View>
                </View>  
            </View>
        );
    }
}



// function mapStateToProps(state) {

//   const { appMain } = state;
//   console.log(appMain)
//   return {
//     appMain
//   }
// }

// export default connect(mapStateToProps)(Cart);