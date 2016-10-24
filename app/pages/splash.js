
import React,{Component} from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';

import AppMain from './appMain';
import { connect } from 'react-redux';
import {getRecomGoods} from '../actions/getRecomGoods';
import {getSwiperImg} from '../actions/getAdsAction';
var { height ,width } = Dimensions.get('window');

class Splash extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { navigator,dispatch } = this.props;
        InteractionManager.runAfterInteractions(() => {
            dispatch(getRecomGoods());
            dispatch(getSwiperImg(9));
        });             


        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: AppMain,
                    params: {}
                });
            });
        }, 2000);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return ( 
            <View style = {{flex: 1}} >
            <Image style = {{
                        flex: 1,
                        width: width,
                        height: height}}
                    source = {require('../imgs/welcome.jpg')}/> 
            </View>
        );
    }
}

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
export default connect(mapStateToProps)(Splash);