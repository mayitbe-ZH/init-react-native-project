import React ,{Component} from 'react';
import {Text,View,Alert,TextInput,InteractionManager} from 'react-native';

import { connect } from 'react-redux';

import {add,minus} from '../actions/appMainAction' ;


class Home extends Component {
    constructor(props) {
      super(props);    
    }

    add = ()=>{
        const {dispatch} = this.props;
        dispatch(add());
    }
    minus = ()=>{
        const {dispatch} = this.props;
        dispatch(minus());
    }
    render() {
        const {appMain} = this.props;
        console.log(appMain);
        return (
            <View>
                <Text onPress= {this.add}>点我 + 1</Text>
                <Text onPress= {this.minus}>点我 - 1</Text>
                <Text >{appMain.couter}</Text>
                <Text >{appMain.name}</Text>
                <Text >{appMain.status}</Text>
            </View>
        );
    }
}

//这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。 
function mapStateToProps(state) {
  const { appMain } = state;
  console.log(appMain);
  return {
    appMain
  }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
export default connect(mapStateToProps)(Home);