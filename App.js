import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Font, AppLoading } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LottieView from "lottie-react-native";
import * as WeatherData from "./assets/mockData/weatherData";
import moment from "moment";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Seattle, Wa", // TODO: For testing – set to empty string for prod
      lat: null,
      lng: null,
      city: null,
      isFetchingData: false,
      weatherData: null
    };
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
          // navigate to weather info screen
          this.props.navigation.navigate("Weather", { 
            weatherData: this.state.weatherData,
            city: this.state.city
          })
          // .then(() => {
          //   this.setState({ isFetchingData: false });
          // });
        });
      });
  }

  getCoords() {
    // should be stored in an .env file, but I live dangerously
    const apiKey = 'bba00951986840b0838be4158db370b8';

    return fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${this.state.text}`
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('coords API called');
        this.setState({
          lat: responseJson.results[0].geometry.lat,
          lng: responseJson.results[0].geometry.lng,
          city: responseJson.results[0].components.city ? responseJson.results[0].components.city : this.titleCase(this.state.text)
        });
        console.log('city: ' + this.state.city)
      })
      .catch(error => {
        console.error(error);
      });
  }

  getWeather(lat, lng) {
    // should be stored in an .env file, but I live dangerously
    const apiKey = '3bd0a54365796fc1a01468fc9834a2b3';

    return fetch(
      `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
    )
    .then(response => response.json())
    .then(responseJson => {
      console.log("weather API called");
      this.setState({
        weatherData: responseJson
      })
    }) ;
  }

  // utility method
  titleCase(str) {
    return str.toLowerCase().split(" ").map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isFetchingData ? (
          <TextInput
            style={styles.searchInput}
            placeholder="search for a city"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        ) : null}

        {!this.state.isFetchingData ? (
          <TouchableOpacity onPress={this.onPress} disabled={this.state.text ? false : true}>
            <View style={styles.button}>
              <MisterPixel style={[styles.buttonLabel, !this.state.text ? styles.disabledBtn : null]}>Start</MisterPixel>
            </View>
          </TouchableOpacity>
        ) : null}

        {this.state.isFetchingData ? (
          <View>
            <LottieView
              source={require("./assets/icons/loading.json")}
              progress={this.state.progress}
            />
            <MisterPixel style={styles.loadingState}>
              Loading… {"\n"}
              Do not turn off the power
            </MisterPixel>
          </View>
        ) : null}
      </View>
    );
  }
}

export class WeatherScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const weatherData = navigation.getParam('weatherData', WeatherData.WEATHER_DATA[0]);
    const city = navigation.getParam('city', 'Seattle WA');
    const next24hours = weatherData.hourly.data.slice(0, 24);
    const next7days = weatherData.daily.data;

    return (
      <View>
        <MisterPixel>
          City: {JSON.stringify(city)} {"\n"}
          Time:{" "}
          {moment(moment.unix(weatherData.currently.time)).format("h:mm a")}
          {"\n"}
          Current Temp:{" "}
          {JSON.stringify(Math.round(weatherData.currently.temperature))}
          {"\n"}
          Summary: {JSON.stringify(weatherData.currently.summary)}
        </MisterPixel>
        {/* <ScrollView horizontal={true}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {next24hours.map(data => {
              return (
                <Text
                  key={data.time}
                  style={{
                    width: 40,
                    height: 39,
                    backgroundColor: "powderblue",
                    textAlign: "center"
                  }}
                >
                  {Math.round(data.temperature)} {"\n"}
                  {moment(moment.unix(data.time)).format("ha")}
                </Text>
              );
            })}
          </View>
        </ScrollView> */}
        {/* <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              width: 91,
              height: 45,
              textAlign: "center"
            }}
          >
            Wind {"\n"}
            {weatherData.currently.windSpeed}mph
          </Text>
          <Text
            style={{
              width: 91,
              height: 39,
              textAlign: "center"
            }}
          >
            Percipitation {"\n"}
            {weatherData.currently.precipProbability}%
          </Text>
          <Text
            style={{
              width: 91,
              height: 39,
              textAlign: "center"
            }}
          >
            Humidity {"\n"}
            {weatherData.currently.humidity}%
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              width: 103,
              height: 56,
              textAlign: "center"
            }}
          >
            Sunrise {"\n"}
            {moment(
              moment.unix(weatherData.daily.data[0].sunriseTime)
            ).format("h:mm a")}
          </Text>
          <Text
            style={{
              width: 103,
              height: 56,
              textAlign: "center"
            }}
          >
            Sunset {"\n"}
            {moment(
              moment.unix(weatherData.daily.data[0].sunsetTime)
            ).format("h:mm a")}
          </Text>
        </View>
        <View>
          {next7days.map(data => {
            return (
              <Text key={data.time}>
                Day: {moment(moment.unix(data.time)).format("dddd")}
                {"\n"}
                High: {Math.round(data.temperatureHigh)}
                {"\n"}
                Low: {Math.round(data.temperatureLow)}
                {"\n"}
                Icon: {data.icon}
              </Text>
            );
          })}
        </View> */}
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
  },
  disabledBtn: {
    opacity: 0.8
  }
});

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Weather: { screen: WeatherScreen },
  // Home: { screen: HomeScreen }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }
  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading 
          startAsync={this._loadResourcesAsync} 
          onError={this._handleLoadingError} 
          onFinish={this._handleFinishLoading} />
      )
    } else {
      return <AppContainer />;
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'mister-pixel': require('./assets/fonts/misterPixelRegular.otf')
      }),
    ]);
  };

    _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

export class MisterPixel extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "mister-pixel" }]}
      />
    );
  }
}
