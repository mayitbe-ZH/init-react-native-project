import React ,{Component} from 'react';
import {Text,View,ScrollView,Image,Dimensions,StyleSheet,ListView,TouchableOpacity,InteractionManager} from 'react-native';

import { connect } from 'react-redux';
import {getRecomGoods} from '../actions/getRecomGoods';
import {getSwiperImg} from '../actions/getAdsAction';
import GoodsDetail from './goodsDetail';
import Swiper from '../components/Swiper';

var {height, width} = Dimensions.get('window');
const MENU_IMGS = [
  require('../imgs/menu_cxb.png'),
  require('../imgs/menu_qbfl.png'),
  require('../imgs/menu_xpss.png'),
  require('../imgs/menu_sczx.png'),
]

class Home extends Component {
    constructor(props) {
        super(props);       
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
          const {dispatch} = this.props;
          dispatch(getRecomGoods());
          dispatch(getSwiperImg(9));
        });     
    }
    renderLoadingView = () =>{
        return (
          <View>
            <Text>
              Loading more...
            </Text>
          </View>
        );
    }    
    goGoodsDetail =(prod_id)=>{
        const {navigator} = this.props;

        InteractionManager.runAfterInteractions(() => {
           navigator.push({
                component: GoodsDetail,
                params: {
                    prod_id: prod_id
                }
           });
        })
    }
    renderGoodsList=(item)=>{
        return (

            <TouchableOpacity style={{height:width/2-12+34+16+28,width:width/2-12,marginLeft:8,backgroundColor:'#ffffff',marginBottom:8,borderTopLeftRadius:4,borderTopRightRadius:4,overflow:'hidden'}} onPress = {()=>this.goGoodsDetail(item.prod_id)}>
                <Image source={{uri:item.list_img}} style={{width:width/2-12,height:width/2-12}} ></Image>
                <View>
                    <Text numberOfLines={2} style={{width:152, height:34, fontSize:14,marginVertical:8}}>{item.prod_name}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:4,height:20}}>
                        <Text style={{color:'red'}}>¥{item.mall_price}</Text>
                        <Text  style={{fontSize:12}}>已售:520</Text>
                    </View>    
                </View>
            </TouchableOpacity>

        )
    }
    onEndReached= ()=>{ //滑动底部时候触发
        console.log('1111')
        // const {dispatch} = this.props;
        // dispatch(getRecomGoods());
    }

    render() {
        const {home,getAds} = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <ScrollView>
                      
                    <View style={{height:184}}>
                        <Swiper imgListData= {getAds.index_Img_swper}/>
                    </View> 

                    <View style={{flexDirection:'row',backgroundColor:'white',height:85,alignItems:'center',marginTop:8}}>
                        <View style={styles.menu_list}>
                            <Image source={MENU_IMGS[0]} style={styles.menu_img}></Image>
                            <Text>全部商品</Text>
                        </View> 
                        <View style={styles.menu_list}>
                            <Image source={MENU_IMGS[1]} style={styles.menu_img}></Image>
                            <Text>畅销榜</Text>
                        </View> 
                        <View style={styles.menu_list}>
                            <Image source={MENU_IMGS[2]} style={styles.menu_img}></Image>
                            <Text>价格排行</Text>
                        </View> 
                        <View style={styles.menu_list}>
                            <Image source={MENU_IMGS[3]} style={styles.menu_img}></Image>
                            <Text>新品上市</Text>
                        </View> 
                    </View> 

                    <View style={styles.recomm_goods_wrap}> 
                        <View style={styles.recomm_goods_wrap_left}> 
                            <View style={styles.recomm_goods_wrap_left_border}></View>
                            <Text >推荐商品</Text>                            
                        </View> 
                        <Text style={styles.recomm_goods_wrap_right}>更多商品 >></Text>                       
                    </View>

                    <ListView
                        initialListSize={4}
                        dataSource={ds.cloneWithRows(home.goodsListDataSource)}
                        renderRow= {this.renderGoodsList}
                        enableEmptySections={true}
                        onEndReachedThreshold  ={10}
                        onEndReached= {this.onEndReached}
                        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',marginTop:8}}/>  
                  
                </ScrollView>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    menu_list:{
        flex:1,  
        flexDirection:'column',
        alignItems:'center'

    },
    menu_img:{
        height:39,
        width:39,
        marginBottom:5
    },
    recomm_goods_wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal :10,
        height:40,
        alignItems:'center',
        backgroundColor:'white',
        marginTop:8
    },
    recomm_goods_wrap_left:{
        flexDirection:'row',
        alignItems:'center'

    },
    recomm_goods_wrap_right:{
        fontSize:10
    },
    recomm_goods_wrap_left_border:{
        height:18,
        width:4,
        backgroundColor:'red',
        marginRight:8
    }

});

//这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。 
function mapStateToProps(state) {
    const { home,getAds } = state;
    console.log(home,getAds);
    return {
        home,
        getAds
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
export default connect(mapStateToProps)(Home);