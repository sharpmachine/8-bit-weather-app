import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'mister-pixel': require('./assets/fonts/misterPixelRegular.otf')
    });

    this.setState({ fontLoaded: true});
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
});
