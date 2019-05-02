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
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'mister-pixel': require('./assets/fonts/misterPixelRegular.otf')
    });

    this.setState({ fontLoaded: true});
  }

  onPress = () => {
    console.log('pressed')
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
