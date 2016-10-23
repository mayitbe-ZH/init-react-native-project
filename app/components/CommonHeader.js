/**
 * 设置公用header
 */
'use strict';
import React, {PropTypes,Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { NaviGoBack } from '../utils/goBackUtil';

export default class CommonHeader extends Component{
  constructor(props) {
    super(props);

  }
  //返回
  goBack = ()=>{
      const {navigator} = this.props;
      console.log('goback')
      return NaviGoBack(navigator);
  }   
  render() {
    const {title} = this.props;
    return (
       <View style={{height:48,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#e6e6e6'}}>
          <View style={{width:48,height:48,justifyContent:'center',alignItems:'center'}} >
              <TouchableOpacity onPress={()=>this.goBack()}>
                <Image source={require('../imgs/return_icon.png')} style={{width:11,height:18}}></Image>
              </TouchableOpacity>
            
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',height:48,width:50}}>
             <Text style={{fontSize:18,color:'#000',alignSelf:'center'}}>{title}</Text>
          </View>
          <View style={{width:48}}>
          </View>
      </View>     
    );
  }
}


