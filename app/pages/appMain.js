import React ,{Component} from 'react';
import {Text,View,Alert,TextInput,InteractionManager,Image} from 'react-native';

import { connect } from 'react-redux';

import {add,minus} from '../actions/appMainAction' ;
import TabNavigator from 'react-native-tab-navigator';

import Home from './home';
// import Fav from './fav';
// import Order from './Order';
// import Cart from './shoppingCart';
// import Center from './userCenter';

export default class AppMain extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            selectedTab:'home'
        } 
    }


    render() {
        // const {appMain} = this.props;
        // console.log(appMain);
        return (
            <View>
                        <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../imgs/a1.png')} />}
                    renderSelectedIcon={() => <Image source={require('../imgs/a2.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="cart"
                    renderIcon={() => <Image source={require('../imgs/b1.png')} />}
                    renderSelectedIcon={() => <Image source={require('../imgs/b2.png')} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>

                </TabNavigator.Item>
            </TabNavigator>
            </View>
        );
    }
}

// //这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。 
// function mapStateToProps(state) {
//   const { appMain } = state;
//   console.log(appMain);
//   return {
//     appMain
//   }
// }
// // 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
// export default connect(mapStateToProps)(Home);