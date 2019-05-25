import { Location, Permissions } from "expo";
import * as ApiKeys from "../config";

const Fetch = {
  locationCoords: function (query) {
    const apiKey = ApiKeys.API_KEYS.opencage;

    return fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${query}`
    )
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  },

  locationName: function (lat, lng) {
    const apiKey = ApiKeys.API_KEYS.opencage;

    return fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}%2C${lng}`
    )
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  },

  currentLocation: async function () {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    return await Location.getCurrentPositionAsync({})
  },

  weather: function (lat, lng) {
    const apiKey = ApiKeys.API_KEYS.darkSky;

    return fetch(
      `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
    )
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });;
  }
};

export default Fetch;