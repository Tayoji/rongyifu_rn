/**
 * Created by Tayoji on 2017/7/26.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import {StackNavigator} from 'react-navigation';
const images = [require('../img/slide_background_0.png'),
    require('../img/slide_background_1.png'),
    require('../img/slide_background_2.png')];
export default class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }

    }

    componentDidMount() {
        let self = this;
        var count = this.state.index
        this.timer = setInterval(() => {
            count += 1
            if (count >= images.length) {
                count = 0
            }
            console.log(count)

            self.setState({
                index: count
            })
        }, 1000)
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        const {index} = this.state;
        return (<View style={styles.container}>

            <Image style={styles.image} source={images[index]} resizeMode={'cover'}>

                <Button style={styles.button} title="注册" onPress={() => {
                }}/>
                <Button style={styles.button} title="登录" onPress={() => {
                }}/>
            </Image>

        </View>)

    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'flex-end',
        paddingBottom:50,
    },
    button: {
        paddingRight: 100,
        flex: 3,
        backgroundColor: '#0f0',
        borderWidth:1,
        borderColor:'#F0F',
}


})