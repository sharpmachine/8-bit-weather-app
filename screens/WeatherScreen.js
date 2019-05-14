import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	StatusBar
} from "react-native";
import { LinearGradient } from "expo";
import { MisterPixel } from "../components/StyledText";
import LottieView from "lottie-react-native";
import * as WeatherData from "../assets/mockData/weatherData";
import moment from "moment-timezone";

export default class WeatherScreen extends React.Component {
	constructor(props) {
		super(props);
		const { navigation } = this.props;
		this.state = {
			weatherData: navigation.getParam('weatherData', WeatherData.WEATHER_DATA[0]),
			city: navigation.getParam('city', 'Seattle')
		}
	}

	getGradient() {
		const temp = this.state.weatherData.currently.temperature;
		const currentTime = this.state.weatherData.currently.time;
		const sunrise = this.state.weatherData.daily.data[0].sunriseTime;
		const sunset = this.state.weatherData.daily.data[0].sunsetTime;
		// set number of sets per temp bucket
		const gradientSets = 9;
		// get duration of time between sunset and sunrise
		const lengthOfDay = sunset - sunrise;
		// set how long each gradient will show for
		const durationPergradient = Math.floor(lengthOfDay / (gradientSets - 1));
		const intervals = []
		let gradient = {
			startColor: "",
			endColor: "F09931",
			statusBarStyle: "light-content"
		};

		// set times that gradients switch
		let i;
		for (i = 0; i < (gradientSets - 1); i++) {
			intervals.push(sunrise + (durationPergradient * i))
		}

		if (temp < 40) {
			console.log("less than 40");
			gradient.startColor = "#000";
			gradient.endColor = "#000";
			gradient.statusBarStyle = "dark-content";
		} else if (temp > 40 && temp < 85) {
			console.log("between 40 and 85");
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
			gradient.startColor = "#000";
			gradient.endColor = "#000";
			gradient.statusBarStyle = "dark-content";
		} else {
			gradient.startColor = "#000";
			gradient.endColor = "#000";
			gradient.statusBarStyle = "dark-content";
		}

		return gradient;
	}

	render() {
		// const next24hours = this.state.weatherData.hourly.data.slice(0, 24);
		// const next7days = this.state.weatherData.daily.data;

		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					barStyle={
						this.getGradient().statusBarStyle
					}
				/>
				<SafeAreaView
					style={{
						flex: 0,
						backgroundColor: this.getGradient().startColor
					}}
				/>
				<SafeAreaView
					style={{
						flex: 1,
						backgroundColor: this.getGradient().endColor
					}}
				>
					<LinearGradient
						colors={[
							this.getGradient().startColor,
							this.getGradient().endColor
						]}
						style={{ flex: 1 }}
					>
						<View style={styles.container}>
							<MisterPixel
								style={{ fontSize: 24, marginTop: 70, marginBottom: 7 }}
							>
								{this.state.city}
							</MisterPixel>
							<MisterPixel style={{ marginBottom: 187 }}>
								{moment(moment.unix(this.state.weatherData.currently.time)).format(
									"MMMM D"
								)}
								, 1988
              </MisterPixel>
							<MisterPixel style={{ fontSize: 58, marginBottom: 7 }}>
								{Math.round(this.state.weatherData.currently.temperature)}°
              </MisterPixel>
							<MisterPixel style={{ marginBottom: 7 }}>
								{this.state.weatherData.currently.summary}
							</MisterPixel>
							<MisterPixel>
								{moment(
									moment
										.unix(this.state.weatherData.currently.time)
										.tz(this.state.weatherData.timezone)
								)
									.format("h:mm a")}
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
	}
});