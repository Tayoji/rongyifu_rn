/**
 * Created by Tayoji on 2017/7/26.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableHighlight
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

    static navigationOptions = {
        title: 'HomePage',
        header: null,

    }

    componentDidMount() {
        let self = this;
        var count = this.state.index
        this.timer = setInterval(() => {
            count += 1
            if (count >= images.length) {
                count = 0
            }
            self.setState({
                index: count
            })
        }, 1500)
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        const {index} = this.state;
        const {navigate} = this.props.navigation
        return (<View style={styles.container}>
            <Image style={styles.image} source={images[index]} resizeMode={'cover'}>
                <TouchableHighlight style={styles.reg}>
                    <Text style={{backgroundColor: 'rgba(0,0,0,0)', color: '#333', fontSize: 18, textAlign: 'center'}}>
                        注册
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.login} onPress={() => {
                    navigate('Login', {mode: 'model'})
                }}>
                    <Text style={{
                        padding: 10,
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: '#fff',
                        fontSize: 18,
                        textAlign: 'center'
                    }}>
                        登录
                    </Text>
                </TouchableHighlight>
            </Image>

        </View>)

    }
}
const b = "rgb(34,161,205)"
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
        alignItems: 'flex-end',
        paddingBottom: 50
    },
    buttons: {
        flex: 1,
        height: 40,
        width: '100%'
    }
    ,
    reg: {
        backgroundColor: '#fff',
        width: 130,
        height: 44,
        borderWidth: 1,
        borderRadius: 22,
        borderColor: '#fff',
        justifyContent: 'center'
    },

    login: {
        backgroundColor: b,
        width: 130,
        height: 44,
        borderWidth: 1,
        borderRadius: 22,
        borderColor: b,
        justifyContent: 'center'
    }

})