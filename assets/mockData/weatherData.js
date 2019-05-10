        {
          /* <ScrollView horizontal={true}>
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
        </ScrollView> */
        }
        {
          /* <View
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
        </View> */
        }


export const WEATHER_DATA = [{
  "latitude": 37.8267,
  "longitude": -122.4233,
  "timezone": "America/Los_Angeles",
  "currently": {
    "time": 1556850616,
    "summary": "Partly Cloudy",
    "icon": "partly-cloudy-day",
    "nearestStormDistance": 464,
    "nearestStormBearing": 58,
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 61.36,
    "apparentTemperature": 61.36,
    "dewPoint": 41.69,
    "humidity": 0.48,
    "pressure": 1014.63,
    "windSpeed": 5.19,
    "windGust": 11.25,
    "windBearing": 267,
    "cloudCover": 0.28,
    "uvIndex": 0,
    "visibility": 6.01,
    "ozone": 355.99
  },
  "minutely": {
    "summary": "Partly cloudy for the hour.",
    "icon": "partly-cloudy-day",
    "data": [
      {
        "time": 1556850600,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556850660,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556850720,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556850780,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556850840,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556850900,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556850960,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851020,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851080,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851140,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851200,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851260,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851320,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851380,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851440,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851500,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851560,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851620,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851680,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851740,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851800,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851860,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851920,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556851980,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852040,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852100,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852160,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852220,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852280,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852340,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852400,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852460,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852520,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852580,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852640,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852700,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852760,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852820,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852880,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556852940,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853000,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853060,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853120,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853180,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853240,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853300,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853360,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853420,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853480,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853540,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853600,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853660,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853720,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853780,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853840,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853900,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556853960,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556854020,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556854080,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556854140,
        "precipIntensity": 0,
        "precipProbability": 0
      },
      {
        "time": 1556854200,
        "precipIntensity": 0,
        "precipProbability": 0
      }
    ]
  },
  "hourly": {
    "summary": "Mostly cloudy starting tonight, continuing until tomorrow afternoon.",
    "icon": "partly-cloudy-day",
    "data": [
      {
        "time": 1556848800,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 62.29,
        "apparentTemperature": 62.29,
        "dewPoint": 41.56,
        "humidity": 0.47,
        "pressure": 1014.61,
        "windSpeed": 5.65,
        "windGust": 12.11,
        "windBearing": 266,
        "cloudCover": 0.23,
        "uvIndex": 0,
        "visibility": 5.67,
        "ozone": 356.29
      },
      {
        "time": 1556852400,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 60.44,
        "apparentTemperature": 60.44,
        "dewPoint": 41.77,
        "humidity": 0.5,
        "pressure": 1014.65,
        "windSpeed": 4.75,
        "windGust": 10.41,
        "windBearing": 269,
        "cloudCover": 0.34,
        "uvIndex": 0,
        "visibility": 6.35,
        "ozone": 355.69
      },
      {
        "time": 1556856000,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 58.65,
        "apparentTemperature": 58.65,
        "dewPoint": 44.07,
        "humidity": 0.58,
        "pressure": 1015.07,
        "windSpeed": 5.04,
        "windGust": 8.21,
        "windBearing": 249,
        "cloudCover": 0.33,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 355.58
      },
      {
        "time": 1556859600,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 57.14,
        "apparentTemperature": 57.14,
        "dewPoint": 45.5,
        "humidity": 0.65,
        "pressure": 1015.37,
        "windSpeed": 4.58,
        "windGust": 7.21,
        "windBearing": 258,
        "cloudCover": 0.17,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 355.92
      },
      {
        "time": 1556863200,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 55.81,
        "apparentTemperature": 55.81,
        "dewPoint": 46.06,
        "humidity": 0.7,
        "pressure": 1015.27,
        "windSpeed": 4.74,
        "windGust": 6.3,
        "windBearing": 254,
        "cloudCover": 0.13,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 356.9
      },
      {
        "time": 1556866800,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0.0002,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 54.95,
        "apparentTemperature": 54.95,
        "dewPoint": 46.14,
        "humidity": 0.72,
        "pressure": 1014.96,
        "windSpeed": 3.96,
        "windGust": 6.15,
        "windBearing": 270,
        "cloudCover": 0.16,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 358.81
      },
      {
        "time": 1556870400,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 54.29,
        "apparentTemperature": 54.29,
        "dewPoint": 46.14,
        "humidity": 0.74,
        "pressure": 1014.8,
        "windSpeed": 4.67,
        "windGust": 5.77,
        "windBearing": 218,
        "cloudCover": 0.54,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 361.36
      },
      {
        "time": 1556874000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.001,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 53.73,
        "apparentTemperature": 53.73,
        "dewPoint": 46.08,
        "humidity": 0.75,
        "pressure": 1014.73,
        "windSpeed": 4.2,
        "windGust": 5.31,
        "windBearing": 239,
        "cloudCover": 0.6,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 364.04
      },
      {
        "time": 1556877600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 53.14,
        "apparentTemperature": 53.14,
        "dewPoint": 46.09,
        "humidity": 0.77,
        "pressure": 1014.61,
        "windSpeed": 4.08,
        "windGust": 5.27,
        "windBearing": 238,
        "cloudCover": 0.68,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 366.82
      },
      {
        "time": 1556881200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0009,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 52.62,
        "apparentTemperature": 52.62,
        "dewPoint": 46.22,
        "humidity": 0.79,
        "pressure": 1014.62,
        "windSpeed": 4.12,
        "windGust": 5.39,
        "windBearing": 235,
        "cloudCover": 0.78,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 369.68
      },
      {
        "time": 1556884800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0004,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 52.32,
        "apparentTemperature": 52.32,
        "dewPoint": 46.48,
        "humidity": 0.8,
        "pressure": 1014.65,
        "windSpeed": 4.26,
        "windGust": 5.62,
        "windBearing": 232,
        "cloudCover": 0.85,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 371.84
      },
      {
        "time": 1556888400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0016,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 52.35,
        "apparentTemperature": 52.35,
        "dewPoint": 46.79,
        "humidity": 0.81,
        "pressure": 1014.69,
        "windSpeed": 3.91,
        "windGust": 5.17,
        "windBearing": 229,
        "cloudCover": 0.86,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 372.7
      },
      {
        "time": 1556892000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0005,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 52.66,
        "apparentTemperature": 52.66,
        "dewPoint": 47.27,
        "humidity": 0.82,
        "pressure": 1014.89,
        "windSpeed": 3.93,
        "windGust": 5.14,
        "windBearing": 216,
        "cloudCover": 0.85,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 372.78
      },
      {
        "time": 1556895600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0019,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 53.92,
        "apparentTemperature": 53.92,
        "dewPoint": 47.57,
        "humidity": 0.79,
        "pressure": 1015.05,
        "windSpeed": 3.57,
        "windGust": 4.7,
        "windBearing": 224,
        "cloudCover": 0.84,
        "uvIndex": 1,
        "visibility": 10,
        "ozone": 372.65
      },
      {
        "time": 1556899200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0004,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 55,
        "apparentTemperature": 55,
        "dewPoint": 47.94,
        "humidity": 0.77,
        "pressure": 1015.44,
        "windSpeed": 3.13,
        "windGust": 3.3,
        "windBearing": 222,
        "cloudCover": 0.73,
        "uvIndex": 2,
        "visibility": 10,
        "ozone": 372.44
      },
      {
        "time": 1556902800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0003,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 56.9,
        "apparentTemperature": 56.9,
        "dewPoint": 48.27,
        "humidity": 0.73,
        "pressure": 1015.76,
        "windSpeed": 3.2,
        "windGust": 3.37,
        "windBearing": 219,
        "cloudCover": 0.7,
        "uvIndex": 3,
        "visibility": 10,
        "ozone": 371.95
      },
      {
        "time": 1556906400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 58.31,
        "apparentTemperature": 58.31,
        "dewPoint": 48.42,
        "humidity": 0.7,
        "pressure": 1015.85,
        "windSpeed": 3.67,
        "windGust": 3.82,
        "windBearing": 219,
        "cloudCover": 0.66,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 371.34
      },
      {
        "time": 1556910000,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 60.23,
        "apparentTemperature": 60.23,
        "dewPoint": 48.22,
        "humidity": 0.65,
        "pressure": 1015.55,
        "windSpeed": 4.81,
        "windGust": 5.02,
        "windBearing": 227,
        "cloudCover": 0.57,
        "uvIndex": 5,
        "visibility": 10,
        "ozone": 370.53
      },
      {
        "time": 1556913600,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 62.32,
        "apparentTemperature": 62.32,
        "dewPoint": 47.87,
        "humidity": 0.59,
        "pressure": 1015,
        "windSpeed": 6.33,
        "windGust": 6.82,
        "windBearing": 238,
        "cloudCover": 0.45,
        "uvIndex": 6,
        "visibility": 10,
        "ozone": 369.69
      },
      {
        "time": 1556917200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 63.79,
        "apparentTemperature": 63.79,
        "dewPoint": 47.61,
        "humidity": 0.56,
        "pressure": 1014.49,
        "windSpeed": 7.49,
        "windGust": 8.23,
        "windBearing": 246,
        "cloudCover": 0.35,
        "uvIndex": 6,
        "visibility": 10,
        "ozone": 369.36
      },
      {
        "time": 1556920800,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 64.47,
        "apparentTemperature": 64.47,
        "dewPoint": 47.52,
        "humidity": 0.54,
        "pressure": 1014.04,
        "windSpeed": 8.12,
        "windGust": 9.02,
        "windBearing": 250,
        "cloudCover": 0.27,
        "uvIndex": 5,
        "visibility": 10,
        "ozone": 369.78
      },
      {
        "time": 1556924400,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 64.36,
        "apparentTemperature": 64.36,
        "dewPoint": 47.52,
        "humidity": 0.54,
        "pressure": 1013.63,
        "windSpeed": 8.42,
        "windGust": 9.47,
        "windBearing": 252,
        "cloudCover": 0.2,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 370.7
      },
      {
        "time": 1556928000,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 63.26,
        "apparentTemperature": 63.26,
        "dewPoint": 47.56,
        "humidity": 0.57,
        "pressure": 1013.32,
        "windSpeed": 8.46,
        "windGust": 9.59,
        "windBearing": 253,
        "cloudCover": 0.16,
        "uvIndex": 2,
        "visibility": 10,
        "ozone": 371.96
      },
      {
        "time": 1556931600,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 61.31,
        "apparentTemperature": 61.31,
        "dewPoint": 47.74,
        "humidity": 0.61,
        "pressure": 1013.21,
        "windSpeed": 8.1,
        "windGust": 9.27,
        "windBearing": 253,
        "cloudCover": 0.15,
        "uvIndex": 1,
        "visibility": 10,
        "ozone": 373.64
      },
      {
        "time": 1556935200,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 59.08,
        "apparentTemperature": 59.08,
        "dewPoint": 47.98,
        "humidity": 0.67,
        "pressure": 1013.21,
        "windSpeed": 7.48,
        "windGust": 8.61,
        "windBearing": 253,
        "cloudCover": 0.15,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 375.63
      },
      {
        "time": 1556938800,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0.0003,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 57.18,
        "apparentTemperature": 57.18,
        "dewPoint": 48.13,
        "humidity": 0.72,
        "pressure": 1013.28,
        "windSpeed": 6.84,
        "windGust": 7.9,
        "windBearing": 252,
        "cloudCover": 0.17,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 377.07
      },
      {
        "time": 1556942400,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0.0002,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 55.43,
        "apparentTemperature": 55.43,
        "dewPoint": 48.12,
        "humidity": 0.76,
        "pressure": 1013.46,
        "windSpeed": 6.28,
        "windGust": 7.21,
        "windBearing": 251,
        "cloudCover": 0.18,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 377.65
      },
      {
        "time": 1556946000,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0.0003,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 53.65,
        "apparentTemperature": 53.65,
        "dewPoint": 47.99,
        "humidity": 0.81,
        "pressure": 1013.68,
        "windSpeed": 5.74,
        "windGust": 6.5,
        "windBearing": 249,
        "cloudCover": 0.2,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 377.66
      },
      {
        "time": 1556949600,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0.0004,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 52.36,
        "apparentTemperature": 52.36,
        "dewPoint": 47.79,
        "humidity": 0.84,
        "pressure": 1013.81,
        "windSpeed": 5.27,
        "windGust": 5.89,
        "windBearing": 247,
        "cloudCover": 0.24,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 377.25
      },
      {
        "time": 1556953200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0007,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 51.71,
        "apparentTemperature": 51.71,
        "dewPoint": 47.4,
        "humidity": 0.85,
        "pressure": 1013.71,
        "windSpeed": 4.92,
        "windGust": 5.42,
        "windBearing": 241,
        "cloudCover": 0.35,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 376.29
      },
      {
        "time": 1556956800,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.001,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 51.5,
        "apparentTemperature": 51.5,
        "dewPoint": 46.9,
        "humidity": 0.84,
        "pressure": 1013.48,
        "windSpeed": 4.64,
        "windGust": 5.04,
        "windBearing": 235,
        "cloudCover": 0.49,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 374.79
      },
      {
        "time": 1556960400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0014,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 51.24,
        "apparentTemperature": 51.24,
        "dewPoint": 46.54,
        "humidity": 0.84,
        "pressure": 1013.23,
        "windSpeed": 4.46,
        "windGust": 4.85,
        "windBearing": 231,
        "cloudCover": 0.6,
        "uvIndex": 0,
        "visibility": 9.44,
        "ozone": 373.61
      },
      {
        "time": 1556964000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0016,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 50.85,
        "apparentTemperature": 50.85,
        "dewPoint": 46.42,
        "humidity": 0.85,
        "pressure": 1012.92,
        "windSpeed": 4.49,
        "windGust": 5.03,
        "windBearing": 232,
        "cloudCover": 0.63,
        "uvIndex": 0,
        "visibility": 9.05,
        "ozone": 372.93
      },
      {
        "time": 1556967600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0017,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 50.51,
        "apparentTemperature": 50.51,
        "dewPoint": 46.44,
        "humidity": 0.86,
        "pressure": 1012.58,
        "windSpeed": 4.62,
        "windGust": 5.39,
        "windBearing": 237,
        "cloudCover": 0.65,
        "uvIndex": 0,
        "visibility": 9.35,
        "ozone": 372.42
      },
      {
        "time": 1556971200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0017,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 50.48,
        "apparentTemperature": 50.48,
        "dewPoint": 46.53,
        "humidity": 0.86,
        "pressure": 1012.38,
        "windSpeed": 4.59,
        "windGust": 5.49,
        "windBearing": 239,
        "cloudCover": 0.67,
        "uvIndex": 0,
        "visibility": 9.66,
        "ozone": 372.14
      },
      {
        "time": 1556974800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0016,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 50.52,
        "apparentTemperature": 50.52,
        "dewPoint": 46.67,
        "humidity": 0.87,
        "pressure": 1012.4,
        "windSpeed": 4.14,
        "windGust": 5.02,
        "windBearing": 235,
        "cloudCover": 0.73,
        "uvIndex": 0,
        "visibility": 9.78,
        "ozone": 371.98
      },
      {
        "time": 1556978400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0014,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 50.69,
        "apparentTemperature": 50.69,
        "dewPoint": 46.87,
        "humidity": 0.87,
        "pressure": 1012.54,
        "windSpeed": 3.53,
        "windGust": 4.27,
        "windBearing": 231,
        "cloudCover": 0.82,
        "uvIndex": 0,
        "visibility": 9.79,
        "ozone": 371.9
      },
      {
        "time": 1556982000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0011,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 51.24,
        "apparentTemperature": 51.24,
        "dewPoint": 47.1,
        "humidity": 0.86,
        "pressure": 1012.64,
        "windSpeed": 3.19,
        "windGust": 3.78,
        "windBearing": 227,
        "cloudCover": 0.89,
        "uvIndex": 1,
        "visibility": 9.92,
        "ozone": 372.01
      },
      {
        "time": 1556985600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0005,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 52.32,
        "apparentTemperature": 52.32,
        "dewPoint": 47.36,
        "humidity": 0.83,
        "pressure": 1012.68,
        "windSpeed": 3.25,
        "windGust": 3.63,
        "windBearing": 225,
        "cloudCover": 0.87,
        "uvIndex": 2,
        "visibility": 10,
        "ozone": 372.41
      },
      {
        "time": 1556989200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0002,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 53.42,
        "apparentTemperature": 53.42,
        "dewPoint": 47.61,
        "humidity": 0.81,
        "pressure": 1012.68,
        "windSpeed": 3.58,
        "windGust": 3.75,
        "windBearing": 225,
        "cloudCover": 0.81,
        "uvIndex": 3,
        "visibility": 10,
        "ozone": 372.89
      },
      {
        "time": 1556992800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 54.85,
        "apparentTemperature": 54.85,
        "dewPoint": 47.8,
        "humidity": 0.77,
        "pressure": 1012.59,
        "windSpeed": 4.19,
        "windGust": 4.39,
        "windBearing": 226,
        "cloudCover": 0.79,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 373.1
      },
      {
        "time": 1556996400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 57.32,
        "apparentTemperature": 57.32,
        "dewPoint": 47.86,
        "humidity": 0.71,
        "pressure": 1012.37,
        "windSpeed": 5.33,
        "windGust": 5.67,
        "windBearing": 232,
        "cloudCover": 0.79,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 372.69
      },
      {
        "time": 1557000000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 59.95,
        "apparentTemperature": 59.95,
        "dewPoint": 47.84,
        "humidity": 0.64,
        "pressure": 1012.05,
        "windSpeed": 6.79,
        "windGust": 7.47,
        "windBearing": 238,
        "cloudCover": 0.81,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 371.97
      },
      {
        "time": 1557003600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0002,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 61.53,
        "apparentTemperature": 61.53,
        "dewPoint": 47.87,
        "humidity": 0.61,
        "pressure": 1011.66,
        "windSpeed": 8.09,
        "windGust": 9.13,
        "windBearing": 243,
        "cloudCover": 0.81,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 371.46
      },
      {
        "time": 1557007200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0002,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 61.37,
        "apparentTemperature": 61.37,
        "dewPoint": 47.96,
        "humidity": 0.61,
        "pressure": 1011.14,
        "windSpeed": 9.13,
        "windGust": 10.61,
        "windBearing": 240,
        "cloudCover": 0.78,
        "uvIndex": 4,
        "visibility": 10,
        "ozone": 371.48
      },
      {
        "time": 1557010800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 60.48,
        "apparentTemperature": 60.48,
        "dewPoint": 48.06,
        "humidity": 0.64,
        "pressure": 1010.55,
        "windSpeed": 9.85,
        "windGust": 11.92,
        "windBearing": 249,
        "cloudCover": 0.73,
        "uvIndex": 3,
        "visibility": 10,
        "ozone": 371.72
      },
      {
        "time": 1557014400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 58.92,
        "apparentTemperature": 58.92,
        "dewPoint": 48.2,
        "humidity": 0.68,
        "pressure": 1010.09,
        "windSpeed": 10.16,
        "windGust": 12.52,
        "windBearing": 246,
        "cloudCover": 0.68,
        "uvIndex": 2,
        "visibility": 10,
        "ozone": 371.9
      },
      {
        "time": 1557018000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 57.28,
        "apparentTemperature": 57.28,
        "dewPoint": 48.37,
        "humidity": 0.72,
        "pressure": 1009.85,
        "windSpeed": 9.37,
        "windGust": 11.98,
        "windBearing": 244,
        "cloudCover": 0.6,
        "uvIndex": 1,
        "visibility": 10,
        "ozone": 371.81
      },
      {
        "time": 1557021600,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 55.44,
        "apparentTemperature": 55.44,
        "dewPoint": 48.59,
        "humidity": 0.78,
        "pressure": 1009.77,
        "windSpeed": 8.31,
        "windGust": 10.75,
        "windBearing": 251,
        "cloudCover": 0.51,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 371.67
      }
    ]
  },
  "daily": {
    "summary": "No precipitation throughout the week, with high temperatures falling to 57°F on Sunday.",
    "icon": "clear-day",
    "data": [
      {
        "time": 1556780400,
        "summary": "Mostly cloudy overnight.",
        "icon": "partly-cloudy-night",
        "sunriseTime": 1556802827,
        "sunsetTime": 1556852519,
        "moonPhase": 0.93,
        "precipIntensity": 0,
        "precipIntensityMax": 0,
        "precipProbability": 0,
        "temperatureHigh": 65.4,
        "temperatureHighTime": 1556838000,
        "temperatureLow": 52.32,
        "temperatureLowTime": 1556884800,
        "apparentTemperatureHigh": 65.4,
        "apparentTemperatureHighTime": 1556838000,
        "apparentTemperatureLow": 52.32,
        "apparentTemperatureLowTime": 1556884800,
        "dewPoint": 45.23,
        "humidity": 0.62,
        "pressure": 1016.19,
        "windSpeed": 3.66,
        "windGust": 12.45,
        "windGustTime": 1556834400,
        "windBearing": 261,
        "cloudCover": 0.12,
        "uvIndex": 8,
        "uvIndexTime": 1556827200,
        "visibility": 7.67,
        "ozone": 359.62,
        "temperatureMin": 52.99,
        "temperatureMinTime": 1556805600,
        "temperatureMax": 65.4,
        "temperatureMaxTime": 1556838000,
        "apparentTemperatureMin": 52.99,
        "apparentTemperatureMinTime": 1556805600,
        "apparentTemperatureMax": 65.4,
        "apparentTemperatureMaxTime": 1556838000
      },
      {
        "time": 1556866800,
        "summary": "Mostly cloudy until afternoon.",
        "icon": "partly-cloudy-day",
        "sunriseTime": 1556889160,
        "sunsetTime": 1556938975,
        "moonPhase": 0.96,
        "precipIntensity": 0.0004,
        "precipIntensityMax": 0.0019,
        "precipIntensityMaxTime": 1556895600,
        "precipProbability": 0.05,
        "precipType": "rain",
        "temperatureHigh": 64.47,
        "temperatureHighTime": 1556920800,
        "temperatureLow": 50.48,
        "temperatureLowTime": 1556971200,
        "apparentTemperatureHigh": 64.47,
        "apparentTemperatureHighTime": 1556920800,
        "apparentTemperatureLow": 50.48,
        "apparentTemperatureLowTime": 1556971200,
        "dewPoint": 47.39,
        "humidity": 0.71,
        "pressure": 1014.45,
        "windSpeed": 5.28,
        "windGust": 9.59,
        "windGustTime": 1556928000,
        "windBearing": 242,
        "cloudCover": 0.47,
        "uvIndex": 6,
        "uvIndexTime": 1556913600,
        "visibility": 10,
        "ozone": 371.14,
        "temperatureMin": 52.32,
        "temperatureMinTime": 1556884800,
        "temperatureMax": 64.47,
        "temperatureMaxTime": 1556920800,
        "apparentTemperatureMin": 52.32,
        "apparentTemperatureMinTime": 1556884800,
        "apparentTemperatureMax": 64.47,
        "apparentTemperatureMaxTime": 1556920800
      },
      {
        "time": 1556953200,
        "summary": "Mostly cloudy throughout the day.",
        "icon": "partly-cloudy-day",
        "sunriseTime": 1556975495,
        "sunsetTime": 1557025431,
        "moonPhase": 0.99,
        "precipIntensity": 0.0006,
        "precipIntensityMax": 0.0017,
        "precipIntensityMaxTime": 1556971200,
        "precipProbability": 0.06,
        "precipType": "rain",
        "temperatureHigh": 61.53,
        "temperatureHighTime": 1557003600,
        "temperatureLow": 50.82,
        "temperatureLowTime": 1557046800,
        "apparentTemperatureHigh": 61.53,
        "apparentTemperatureHighTime": 1557003600,
        "apparentTemperatureLow": 50.82,
        "apparentTemperatureLowTime": 1557046800,
        "dewPoint": 47.62,
        "humidity": 0.79,
        "pressure": 1011.75,
        "windSpeed": 5.95,
        "windGust": 12.52,
        "windGustTime": 1557014400,
        "windBearing": 239,
        "cloudCover": 0.67,
        "uvIndex": 4,
        "uvIndexTime": 1556992800,
        "visibility": 9.87,
        "ozone": 372.57,
        "temperatureMin": 50.48,
        "temperatureMinTime": 1556971200,
        "temperatureMax": 61.53,
        "temperatureMaxTime": 1557003600,
        "apparentTemperatureMin": 50.48,
        "apparentTemperatureMinTime": 1556971200,
        "apparentTemperatureMax": 61.53,
        "apparentTemperatureMaxTime": 1557003600
      },
      {
        "time": 1557039600,
        "summary": "Mostly cloudy throughout the day.",
        "icon": "partly-cloudy-day",
        "sunriseTime": 1557061831,
        "sunsetTime": 1557111887,
        "moonPhase": 0.03,
        "precipIntensity": 0.0012,
        "precipIntensityMax": 0.0029,
        "precipIntensityMaxTime": 1557057600,
        "precipProbability": 0.07,
        "precipType": "rain",
        "temperatureHigh": 56.72,
        "temperatureHighTime": 1557097200,
        "temperatureLow": 53.79,
        "temperatureLowTime": 1557118800,
        "apparentTemperatureHigh": 56.72,
        "apparentTemperatureHighTime": 1557097200,
        "apparentTemperatureLow": 53.79,
        "apparentTemperatureLowTime": 1557118800,
        "dewPoint": 48.5,
        "humidity": 0.84,
        "pressure": 1009.62,
        "windSpeed": 9.6,
        "windGust": 17.17,
        "windGustTime": 1557100800,
        "windBearing": 228,
        "cloudCover": 0.76,
        "uvIndex": 5,
        "uvIndexTime": 1557086400,
        "visibility": 9.34,
        "ozone": 379.24,
        "temperatureMin": 50.82,
        "temperatureMinTime": 1557046800,
        "temperatureMax": 56.72,
        "temperatureMaxTime": 1557097200,
        "apparentTemperatureMin": 50.82,
        "apparentTemperatureMinTime": 1557046800,
        "apparentTemperatureMax": 56.72,
        "apparentTemperatureMaxTime": 1557097200
      },
      {
        "time": 1557126000,
        "summary": "Mostly cloudy until afternoon.",
        "icon": "partly-cloudy-day",
        "sunriseTime": 1557148168,
        "sunsetTime": 1557198342,
        "moonPhase": 0.06,
        "precipIntensity": 0.0012,
        "precipIntensityMax": 0.0093,
        "precipIntensityMaxTime": 1557133200,
        "precipProbability": 0.07,
        "precipType": "rain",
        "temperatureHigh": 62.37,
        "temperatureHighTime": 1557180000,
        "temperatureLow": 54.8,
        "temperatureLowTime": 1557212400,
        "apparentTemperatureHigh": 62.37,
        "apparentTemperatureHighTime": 1557180000,
        "apparentTemperatureLow": 54.8,
        "apparentTemperatureLowTime": 1557212400,
        "dewPoint": 49.58,
        "humidity": 0.76,
        "pressure": 1011.28,
        "windSpeed": 7.31,
        "windGust": 18.9,
        "windGustTime": 1557126000,
        "windBearing": 220,
        "cloudCover": 0.51,
        "uvIndex": 7,
        "uvIndexTime": 1557176400,
        "visibility": 10,
        "ozone": 368.19,
        "temperatureMin": 54.13,
        "temperatureMinTime": 1557144000,
        "temperatureMax": 62.37,
        "temperatureMaxTime": 1557180000,
        "apparentTemperatureMin": 54.13,
        "apparentTemperatureMinTime": 1557144000,
        "apparentTemperatureMax": 62.37,
        "apparentTemperatureMaxTime": 1557180000
      },
      {
        "time": 1557212400,
        "summary": "Clear throughout the day.",
        "icon": "clear-day",
        "sunriseTime": 1557234506,
        "sunsetTime": 1557284798,
        "moonPhase": 0.1,
        "precipIntensity": 0.0001,
        "precipIntensityMax": 0.0005,
        "precipIntensityMaxTime": 1557226800,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperatureHigh": 63.68,
        "temperatureHighTime": 1557262800,
        "temperatureLow": 53.51,
        "temperatureLowTime": 1557316800,
        "apparentTemperatureHigh": 63.68,
        "apparentTemperatureHighTime": 1557262800,
        "apparentTemperatureLow": 53.51,
        "apparentTemperatureLowTime": 1557316800,
        "dewPoint": 49.86,
        "humidity": 0.75,
        "pressure": 1014.43,
        "windSpeed": 6.4,
        "windGust": 15.18,
        "windGustTime": 1557273600,
        "windBearing": 233,
        "cloudCover": 0,
        "uvIndex": 8,
        "uvIndexTime": 1557259200,
        "visibility": 10,
        "ozone": 369.77,
        "temperatureMin": 54.8,
        "temperatureMinTime": 1557212400,
        "temperatureMax": 63.68,
        "temperatureMaxTime": 1557262800,
        "apparentTemperatureMin": 54.8,
        "apparentTemperatureMinTime": 1557212400,
        "apparentTemperatureMax": 63.68,
        "apparentTemperatureMaxTime": 1557262800
      },
      {
        "time": 1557298800,
        "summary": "Clear throughout the day.",
        "icon": "clear-day",
        "sunriseTime": 1557320846,
        "sunsetTime": 1557371253,
        "moonPhase": 0.13,
        "precipIntensity": 0.0001,
        "precipIntensityMax": 0.0003,
        "precipIntensityMaxTime": 1557381600,
        "precipProbability": 0.03,
        "precipType": "rain",
        "temperatureHigh": 64.23,
        "temperatureHighTime": 1557349200,
        "temperatureLow": 55.28,
        "temperatureLowTime": 1557406800,
        "apparentTemperatureHigh": 64.23,
        "apparentTemperatureHighTime": 1557349200,
        "apparentTemperatureLow": 55.28,
        "apparentTemperatureLowTime": 1557406800,
        "dewPoint": 50.67,
        "humidity": 0.76,
        "pressure": 1011.83,
        "windSpeed": 5.44,
        "windGust": 14.71,
        "windGustTime": 1557360000,
        "windBearing": 241,
        "cloudCover": 0.01,
        "uvIndex": 8,
        "uvIndexTime": 1557345600,
        "visibility": 10,
        "ozone": 373.72,
        "temperatureMin": 53.51,
        "temperatureMinTime": 1557316800,
        "temperatureMax": 64.23,
        "temperatureMaxTime": 1557349200,
        "apparentTemperatureMin": 53.51,
        "apparentTemperatureMinTime": 1557316800,
        "apparentTemperatureMax": 64.23,
        "apparentTemperatureMaxTime": 1557349200
      },
      {
        "time": 1557385200,
        "summary": "Mostly cloudy throughout the day.",
        "icon": "partly-cloudy-day",
        "sunriseTime": 1557407187,
        "sunsetTime": 1557457708,
        "moonPhase": 0.17,
        "precipIntensity": 0.0018,
        "precipIntensityMax": 0.0097,
        "precipIntensityMaxTime": 1557460800,
        "precipProbability": 0.18,
        "precipType": "rain",
        "temperatureHigh": 63.17,
        "temperatureHighTime": 1557435600,
        "temperatureLow": 55.07,
        "temperatureLowTime": 1557489600,
        "apparentTemperatureHigh": 63.17,
        "apparentTemperatureHighTime": 1557435600,
        "apparentTemperatureLow": 55.07,
        "apparentTemperatureLowTime": 1557489600,
        "dewPoint": 50.72,
        "humidity": 0.77,
        "pressure": 1007.36,
        "windSpeed": 8.27,
        "windGust": 15.35,
        "windGustTime": 1557446400,
        "windBearing": 233,
        "cloudCover": 0.46,
        "uvIndex": 5,
        "uvIndexTime": 1557428400,
        "visibility": 9.24,
        "ozone": 413.7,
        "temperatureMin": 55.28,
        "temperatureMinTime": 1557406800,
        "temperatureMax": 63.17,
        "temperatureMaxTime": 1557435600,
        "apparentTemperatureMin": 55.28,
        "apparentTemperatureMinTime": 1557406800,
        "apparentTemperatureMax": 63.17,
        "apparentTemperatureMaxTime": 1557435600
      }
    ]
  },
  "flags": {
    "sources": [
      "nearest-precip",
      "nwspa",
      "cmc",
      "gfs",
      "hrrr",
      "icon",
      "isd",
      "madis",
      "nam",
      "sref",
      "darksky"
    ],
    "nearest-station": 1.839,
    "units": "us"
  },
  "offset": -7
}]