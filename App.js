import React from "react";
import { Font, AppLoading } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import WeatherScreen from "./screens/WeatherScreen";
import SearchScreen from "./screens/SearchScreen";

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
    Weather: WeatherScreen,
    Search:  SearchScreen
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainNavigator);
