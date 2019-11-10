import React, {Component} from 'react';
import {Button,Text,View, Image, Alert, Platform, TextInput, FlatList} from 'react-native';


export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {movieName: '', releaseYear: '',bool: false};
    }
    check() {
        if (this.props.movies != null) {
            this.state.bool = true;
        }
    }
    render() {
        return (
          <View>
              <Text>
                  Redux Saga Tutorial - Movies List
              </Text>
              <Text>
                  Movie information
              </Text>
              <View>
                  <TextInput
                      onChangeText = {(text) => this.setState({movieName : text})}
                      value = {this.state.movieName}
                      placeholder = 'Enter movie name'
                  />
                  <TextInput
                    onChangeText = {(text) => this.setState({releaseYear : text})}
                    value = {this.state.releaseYear}
                    placeholder = 'release year'
                  />
              </View>
              <View>
                  <Button onPress={() => {
                      if (this.check()) {
                          console.log("Check is true");
                      }
                      this.props.onFetchMovies();
                  }} title={'Fetch movies'}>
                  </Button>
                  <Button onPress={() => {
                      this.props.onAddMovie();
                  }} title={'Add movies'}>

                  </Button>
              </View>

              {/*<FlatList*/}
              {/*    data={this.props.movies}*/}
              {/*    keyExtractor={(item) => item.name}*/}
              {/*    renderItem={({item, index}) => <Text>${item.name} ',releaseYear=' ${item.releaseYear}</Text>}*/}

              {/*/>*/}
          </View>
        );
    }

}

