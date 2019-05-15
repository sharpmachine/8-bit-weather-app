import React from "react";
import { Font, AppLoading } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import WeatherScreen from "./screens/WeatherScreen";
import HomeScreen from "./screens/HomeScreen";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return <AppContainer />;
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "mister-pixel": require("./assets/fonts/misterPixelRegular.otf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Weather: WeatherScreen,
    // Home: { screen: HomeScreen }
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainNavigator);
