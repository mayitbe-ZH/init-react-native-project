
import React,{Component} from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';

import AppMain from './appMain';

var { height ,width } = Dimensions.get('window');

class Splash extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { navigator } = this.props;
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
export default Splash;