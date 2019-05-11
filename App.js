import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Font, AppLoading, LinearGradient } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LottieView from "lottie-react-native";
import * as WeatherData from "./assets/mockData/weatherData";
import moment from "moment";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Seattle Wa", // TODO: For testing – set to empty string for prod
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
          });
          // reset states when navigating completes
          this.props.navigation.addListener(
            'didBlur',
            () => {
              this.setState({ 
                isFetchingData: false,
                text: ""
              });
            }
          )
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
      <View style={[styles.container, {flex: 1}]}>
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

  getGradient(temp, currentTime, sunrise, sunset) {
    let gradient = {
      startColor: "",
      endColor: "",
      statusBarStyle: "light-content"
    };

    const gradientSets = 9;
    const lengthOfDay = sunset - sunrise;
    const durationPergradient = Math.floor(lengthOfDay / (gradientSets - 1));
    const intervals = []

    var i;
    for (i = 0; i < (gradientSets - 1); i++) {
      intervals.push(sunrise + (durationPergradient * i))
    }

    if (temp < 40) {
      console.log("less than 40");
    } else if (temp > 40 && temp < 85) {

      // if between sunset and sunrise
     if (currentTime >= sunrise && currentTime < intervals[1]) {
        // gradient 1
        console.log("between sunrise and gradient 1");
        gradient.startColor = "#F09931";
        gradient.endColor = "#F04A30";
        gradient.statusBarStyle = "light-content";
        
      } else if (currentTime >= intervals[1] && currentTime < intervals[2]) {
        // gradient 2
        console.log("between gradient 1 and 2");
        gradient.startColor = "#F05E7D";
        gradient.endColor = "#A758BD";
        gradient.statusBarStyle = "light-content";
        
      } else if (currentTime >= intervals[2] && currentTime < intervals[3]) {
        // gradient 3
        console.log("between gradient 2 and 3");
        gradient.startColor = "#B890C2";
        gradient.endColor = "#A758BD";
        gradient.statusBarStyle = "light-content";

      } else if (currentTime >= intervals[3] && currentTime < intervals[4]) {
        // gradient 4
        console.log("between gradient 3 and 4");
        gradient.startColor = "#1AD0F2";
        gradient.endColor = "#1CA2F6";
        gradient.statusBarStyle = "light-content";

      } else if (currentTime >= intervals[4] && currentTime < intervals[5]) {
        // gradient 5
        console.log("between gradient 5 and 6");
        gradient.startColor = "#15C2ED";
        gradient.endColor = "#1D9BEE";
        gradient.statusBarStyle = "light-content";

      } else if (currentTime >= intervals[5] && currentTime < intervals[6]) {
        // gradient 6
        console.log("between gradient 6 and 7");
        gradient.startColor = "#1799DB";
        gradient.endColor = "#3F7AC6";
        gradient.statusBarStyle = "light-content";

      } else if (currentTime >= intervals[6] && currentTime < intervals[7]) {
        // gradient 7
        console.log("between gradient 7 and sunset");
        gradient.startColor = "#1B72C9";
        gradient.endColor = "#5E5AA1";
        gradient.statusBarStyle = "light-content";

      } else if (currentTime >= intervals[7] && currentTime < sunset) {
        // gradient 8
        console.log("between gradient 7 and 8");
        gradient.startColor = "#1F4DB9";
        gradient.endColor = "#513773";
        gradient.statusBarStyle = "light-content";

      } else {
        // gradient 9
        console.log("between sunset and sunrise");
        gradient.startColor = "#232BAA";
        gradient.endColor = "#120D34";
        gradient.statusBarStyle = "light-content";
      }
    } else if (temp > 85) {
      console.log("greater than 85");
    } else {
      console.log("doesnt work");
    }

    return gradient;
  }

  render() {
    const { navigation } = this.props;
    const weatherData = navigation.getParam('weatherData', WeatherData.WEATHER_DATA[0]);
    const city = navigation.getParam('city', 'Seattle');
    const next24hours = weatherData.hourly.data.slice(0, 24);
    const next7days = weatherData.daily.data;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={
            this.getGradient(
              weatherData.currently.temperature,
              weatherData.currently.time,
              weatherData.daily.data[0].sunriseTime,
              weatherData.daily.data[0].sunsetTime
            ).statusBarStyle
          }
        />
        <SafeAreaView
          style={{
            flex: 0,
            backgroundColor: this.getGradient(
              weatherData.currently.temperature,
              weatherData.currently.time,
              weatherData.daily.data[0].sunriseTime,
              weatherData.daily.data[0].sunsetTime
            ).startColor
          }}
        />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: this.getGradient(
              weatherData.currently.temperature,
              weatherData.currently.time,
              weatherData.daily.data[0].sunriseTime,
              weatherData.daily.data[0].sunsetTime
            ).endColor
          }}
        >
          <LinearGradient
            colors={[
              this.getGradient(
                weatherData.currently.temperature,
                weatherData.currently.time,
                weatherData.daily.data[0].sunriseTime,
                weatherData.daily.data[0].sunsetTime
              ).startColor,
              this.getGradient(
                weatherData.currently.temperature,
                weatherData.currently.time,
                weatherData.daily.data[0].sunriseTime,
                weatherData.daily.data[0].sunsetTime
              ).endColor
            ]}
            style={{ flex: 1 }}
          >
            <View style={styles.container}>
              <MisterPixel
                style={{ fontSize: 24, marginTop: 70, marginBottom: 7 }}
              >
                {city}
              </MisterPixel>
              <MisterPixel style={{ marginBottom: 187 }}>
                {moment(moment.unix(weatherData.currently.time)).format(
                  "MMMM D"
                )}
                , 1988
              </MisterPixel>
              <MisterPixel style={{ fontSize: 58, marginBottom: 7 }}>
                {Math.round(weatherData.currently.temperature)}°
              </MisterPixel>
              <MisterPixel style={{ marginBottom: 7 }}>
                {weatherData.currently.summary}
              </MisterPixel>
              <MisterPixel>
                {moment(moment.unix(weatherData.currently.time)).format(
                  "h:mm a"
                )}
              </MisterPixel>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  disabledBtn: {
    opacity: 0.8
  },
  searchInput: {
    width: 368,
    height: 60,
    padding: 15,
    borderWidth: 3,
    fontSize: 16,
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
    fontSize: 24,
    color: "#000"
  },
  loadingState: {
    fontFamily: "mister-pixel",
    textAlign: "center",
    color: "#000"
  }
});

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Weather: { screen: WeatherScreen },
    // Home: { screen: HomeScreen }
  },
  {
    headerMode: 'none'
  }
);

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
      return (
          <AppContainer />
      );
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
        style={[{ fontFamily: "mister-pixel", color: "#fff", fontSize: 16 }, this.props.style]}
      />
    );
  }
}
