import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Font } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class WeatherScreen extends React.Component {
  render() {
    return (
      <Text>Weather Screen</Text>
    )
  }
}

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fontLoaded: false,
      lat: null,
      lng: null,
      isFetchingData: false,
      weatherData: null
    };
  }

  // TODO: Preload font somehow
  async componentDidMount() {
    await Font.loadAsync({
      'mister-pixel': require('./assets/fonts/misterPixelRegular.otf')
    });

    this.setState({ fontLoaded: true});

    // TODO: For testing – remove when not neeed anymore
    this.setState({ text: 'Seattle, Wa' })
  }

  onPress = () => {
    // set state when data is being fetched from APIs
    this.setState({ isFetchingData: true });

    // get coords
    this.getCoords()
      .then(() => {

        // Pass coords to dark sky API to fetch weather for queried city
        this.getWeather(this.state.lat, this.state.lng)
        .then(() => {
          console.log(this.state.weatherData);
          // navigate to weather info screen
          this.props.navigation.navigate("Weather");
        });
      });
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

  getWeather(lat, lng) {
    const apiKey = '3bd0a54365796fc1a01468fc9834a2b3';

    return fetch(
      `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
    )
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        weatherData: responseJson
      })
    }) ;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded && !this.state.isFetchingData ? (
          <TextInput
            style={styles.searchInput}
            placeholder="search for a city"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        ) : null}

        {/* TODO: Disable button if search field has no value */}
        {this.state.fontLoaded && !this.state.isFetchingData ? (
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>Start</Text>
            </View>
          </TouchableOpacity>
        ) : null}

        {this.state.fontLoaded && this.state.isFetchingData ? (
          <View>
            <Text style={styles.loadingState}>
              Loading… {"\n"}
              Do not turn off the power
            </Text>
          </View>
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
  },
  loadingState: {
    fontFamily: "mister-pixel",
    fontSize: 16,
    textAlign: 'center'
  }
});

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Weather: { screen: WeatherScreen },
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
