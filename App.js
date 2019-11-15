import React, { Component } from 'react';
import { Button,Text, TextInput, View,  } from 'react-native';

export default class Cal extends Component {
    constructor() {
        super();
        this.state = {text: '1', a: '1',kq: '1'}
    }
    render() {
        return (
            <View>
                <TextInput
                    keyboardType = "numeric"
                    style={{height: 40}}
                    placeholder="Type something here!!"
                    value={this.state.a}

                />
                <TextInput
                    keyboardType = "numeric"
                    style={{height: 40}}
                    placeholder="Type something here!!"
                    value={this.state.text}

                />
                <Text >{this.cal}</Text>
                <Button onPress={this.cal} title={"Calculate"}/>
            </View>
        );
    }
    cal = () => {
        let a1 = Number.parseInt(this.state.a);
        let b1 = Number.parseInt(this.state.text);
        return a1 + b1;
    }
}