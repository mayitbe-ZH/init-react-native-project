import React ,{Component} from 'react';
import {Text,View,InteractionManager,TouchableOpacity,Image,Dimensions,ScrollView} from 'react-native';
import { connect } from 'react-redux';

import {getGoodsDetail} from '../actions/GoodsDetailAction' ;
import { NaviGoBack } from '../utils/goBackUtil';
import Loading from '../components/Loading';

var {height, width} = Dimensions.get('window');

class GoodsDetail extends  Component{
    constructor(props) {
      super(props);
    
    }
    componentDidMount() {
        const {dispatch,goodsDetail} = this.props;
        dispatch(getGoodsDetail(this.props.prod_id));
        console.log(this.props.prod_id)
        console.log(goodsDetail)
    }    
    //返回
    buttonBackAction=()=>{
          const {navigator} = this.props;
          return NaviGoBack(navigator);
    }    
    renderLoadingView(){
        return(
            <Loading visible={true} />
        )
    }

    render() {
        const {goodsDetail} = this.props;
        if (!goodsDetail.status || goodsDetail.status === 'loading') {
            return this.renderLoadingView();
        }else if (goodsDetail.status === 'down'){
            return (
                <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                    <ScrollView>
                        <View style={{height:48,backgroundColor:'#fff',flexDirection:'row',borderBottomWidth:0.4,borderColor:'#cbcbcb'}}>
                                <TouchableOpacity onPress={() => {this.buttonBackAction()}}
                                                  style={{width:100,height:48,alignItems:'flex-start',justifyContent:'center'}}>
                                   <Image source={require('../imgs/return_icon.png')} style={{width:11,height:18,marginLeft:17}}></Image>
                                </TouchableOpacity>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:18,color:'#000',alignSelf:'center'}}>商品详情</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:48,width:100}}>
                                  <TouchableOpacity >
                                    <Image source={require('../imgs/a1.png')} style={{width:24,height:24,marginRight:23}}></Image>
                                  </TouchableOpacity>
                                  <TouchableOpacity >
                                    <Image source={require('../imgs/b1.png')} style={{width:24,height:24,marginRight:17}}></Image>
                                  </TouchableOpacity>
                                </View>
                        </View>
                        <View>
                            <Image source={{uri:goodsDetail.goodsDetail.product.list_img}} style={{width:width,height:width}} ></Image>
                        </View>
                        <View style={{width:width,paddingHorizontal:12,paddingVertical:12,marginBottom:10,backgroundColor:'#fff'}}>
                            <View style={{height:36,width:(width-24),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <View stlye={{height:36,width:256}}>
                                    <Text numberOfLines={2} style={{fontSize:15,width:(width-24),lineHeight:20}}>{goodsDetail.goodsDetail.product.prod_name}</Text>
                                </View>
                            </View>

                            <View style={{height:42,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <Text style={{fontSize:20,color:'#FF240D',fontWeight:'bold'}}>¥ <Text style={{fontSize:20}}>{goodsDetail.goodsDetail.product.mall_price}</Text></Text>
                                    <Text style={{fontSize:14,color:'#797979',textDecorationLine:'line-through',marginLeft:14}}>¥{goodsDetail.goodsDetail.product.origin_price}</Text>
                            </View>
                        </View>
                        <View style={{width:width,height:45,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:12,backgroundColor:'#fff',marginBottom:10}}>
                                <Text style={{fontSize:15,}}>选择 颜色分类</Text>
                                <View>
                                        <Image style={{width:7,height:12}} source={require('../imgs/pp_right.png')}></Image>
                                </View>
                        </View>                        
                        
                        <View style={{width:width,height:110,padding:12,flexDirection:'column',justifyContent:'space-between',backgroundColor:'#fff',marginBottom:10}}>
                            <View style={{height:41,flexDirection:'row',justifyContent:'flex-start'}}>
                              <Image source={{uri:goodsDetail.goodsDetail.shop.brief}} style={{height:41,width:41,resizeMode:'stretch',marginRight:17}} />
                              <View style={{flexDirection:'column',height:41,justifyContent:'space-between'}}>
                                <Text>123123123</Text>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                  <View style={{marginRight:12,flexDirection:'row'}}><Image source={require('../imgs/check.png')} style={{width:12,height:12,marginRight:2}}></Image><Text style={{fontSize:10,color:'#47C221'}}>微信认证</Text></View>
                                  <View style={{flexDirection:'row'}}><Image source={require('../imgs/check.png')} style={{width:12,height:12,marginRight:2}}></Image><Text style={{fontSize:10,color:'#47C221'}}>支持自提</Text></View>
                                </View>
                              </View>
                            </View>
                            <View style={{flex:1,height:31,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{width:171,height:31,borderWidth:1,borderRadius:3,borderColor:'#797979',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                                    <Image source={require('../imgs/addresssmall.png')} style={{height:16,width:16}} ></Image>
                                    <Text style={{fontSize:12,color:'#797979'}}>自提点</Text>
                                </View>
                                <View style={{width:171,height:31,borderWidth:1,borderRadius:3,borderColor:'#797979',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('../imgs/addresssmall.png')} style={{height:16,width:16}} ></Image>
                                    <Text style={{fontSize:12,color:'#797979'}}>进入店铺</Text>
                                </View>
                            </View>
                        </View>  


                      <View style={{width:width,height:45,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
                        <View style={{flex:1,height:45,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:15,textAlign:'center'}}>
                            商品详情
                          </Text>
                        </View>
                        <View style={{width:1,height:32,backgroundColor:'#CBCBCB'}}></View>
                        <View style={{flex:1,height:45,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:15,textAlign:'center'}}>
                            商品评价
                          </Text>
                        </View>
                      </View>

                    </ScrollView>
                    
                    <View style={{width:width,height:50,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#ffffff',borderTopWidth:0.4,borderColor:'#cbcbcb'}}>
                      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRightWidth:1,borderRightColor:'#CBCBCB'}}>
                        <Image source={require('../imgs/a1.png')} style={{width:20,height:20}} ></Image>
                        <Text style={{fontSize:10,color:'#797979'}}>分享</Text>
                      </View>
                      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../imgs/c1.png')} style={{width:20,height:20}} ></Image>
                        <Text style={{fontSize:10,color:'#797979'}}>收藏</Text>
                      </View>
                      <TouchableOpacity style={{flex:1,height:50,backgroundColor:'#FF9402',flexDirection:'row',justifyContent:'center',alignItems:'center'}} ><Text style={{color:'#fff',fontSize:15}}>加入购物车</Text></TouchableOpacity>
                      <TouchableOpacity style={{flex:1,height:50,backgroundColor:'#FF240D',flexDirection:'row',justifyContent:'center',alignItems:'center'}} ><Text style={{color:'#fff',fontSize:15}}>立即购买</Text></TouchableOpacity>
                    </View>
                </View>  
            );
        }

    }
}



function mapStateToProps(state) {

  const { goodsDetail } = state;
  console.log(goodsDetail)
  return {
    goodsDetail
  }
}

export default connect(mapStateToProps)(GoodsDetail);