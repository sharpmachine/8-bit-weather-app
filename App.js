import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Font } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fontLoaded: false,
      lat: null,
      lng: null
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'mister-pixel': require('./assets/fonts/misterPixelRegular.otf')
    });

    this.setState({ fontLoaded: true});
  }

  onPress = () => {
    // get coords
    this.getCoords().then(() =>{
      console.log('gotem');
    });
    
    // show loading
    // navigate to weather info
  }

  getCoords() {
    const apiKey = 'bba00951986840b0838be4158db370b8';

    return fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${this.state.text}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          lat: responseJson.results[0].geometry.lat,
          lng: responseJson.results[0].geometry.lng
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <TextInput
            style={styles.searchInput}
            placeholder="search for a city"
            onChangeText={text => this.setState({ text })}
          />
        ) : null}

        {this.state.fontLoaded ? (
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>Start</Text>
            </View>
          </TouchableOpacity>
        ) : null}

        <Text>
          Coords{"\n"}
          lat: {this.state.lat ? this.state.lat : "0"}
          {"\n"}
          lng: {this.state.lng ? this.state.lng : "0"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    width: 368,
    height: 60,
    padding: 15,
    borderWidth: 3,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "mister-pixel"
  },
  button: {
    height: 60,
    width: 200,
    alignItems: "center",
    padding: 14
  },
  buttonLabel: {
    fontFamily: "mister-pixel",
    fontSize: 24
  }
});
