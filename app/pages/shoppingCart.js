import React ,{Component} from 'react';
import {Text,View,InteractionManager} from 'react-native';
import { connect } from 'react-redux';

import {logOut} from '../actions/appMainAction' ;
import Home from './shoppingCart';
 class Cart extends  Component{
    constructor(props) {
      super(props);
    
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,'nextProps');
        // const {appMain,navigator} = this.props;
        if (nextProps.appMain.isLoin == false) {
            console.log('goHome')
            InteractionManager.runAfterInteractions(()=>{
                this.props.navigator.pop();
            })
            
            // navigator.push({
            //     component: Home
            // })
            return  false
        }
        console.log('ceshi')
        return true 
    }

    logOut(){
        const {dispatch}  = this.props; 
        dispatch(logOut());
    }
    render() {
        const {appMain,dispatch} = this.props;
        return (
            <View>
                <Text>{appMain.user.username}</Text>
                <Text>{appMain.user.age}</Text>
                <Text onPress = {this.logOut.bind(this)}>登出</Text>

            </View>
        );
    }
}



function mapStateToProps(state) {

  const { appMain } = state;
  console.log(appMain)
  return {
    appMain
  }
}

export default connect(mapStateToProps)(Cart);