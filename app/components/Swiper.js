

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  image: {
    width,
    flex: 1
  }
}

export default class  extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
        <Swiper style={styles.wrapper} height={184} paginationStyle={{
              bottom: 5
            }} loop autoplay={true}>
           {this.props.imgListData.map((item,index)=>{
            return(
                <View style={styles.slide} key={index} style={styles.slide1}>
                  <Image  source ={{uri:item.ad_img}} style={{width:width,height:184}}/>
                </View>
              )
           })}
        </Swiper>
    )
  }
}