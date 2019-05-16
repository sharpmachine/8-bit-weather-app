import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	StatusBar,
	Image
} from "react-native";
import { LinearGradient } from "expo";
import { MisterPixel } from "../components/StyledText";
import LottieView from "lottie-react-native";
import * as WeatherData from "../assets/mockData/weatherData";
import * as Gradients from "../constants/Gradients"
import moment from "moment-timezone";
import BottomDrawer from 'rn-bottom-drawer';

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
		const gradients = Gradients.GRADIENTS[0];
		const temp = this.state.weatherData.currently.temperature;
		const currentTime = this.state.weatherData.currently.time;
		const sunrise = this.state.weatherData.daily.data[0].sunriseTime;
		const sunset = this.state.weatherData.daily.data[0].sunsetTime;
		// set number of sets per temp bucket
		const gradientsCount = 9;
		// get duration of time between sunset and sunrise
		const lengthOfDay = sunset - sunrise;
		// set how long each gradient will show for
		const durationPergradient = Math.floor(lengthOfDay / (gradientsCount - 1));
		const intervals = []
		let selectedGradient = {
			startColor: "",
			endColor: "",
			statusBarStyle: "light-content"
		};

		// set times that gradients switch
		let i;
		for (i = 0; i < (gradientsCount - 1); i++) {
			intervals.push(sunrise + (durationPergradient * i))
		}

		if (temp > 85) {
			console.log("greater than 85");
			// if between sunset and sunrise
			if (currentTime >= sunrise && currentTime < intervals[1]) {
				// gradient 0 (sunrise)
				selectedGradient = gradients.above_85[0];
			} else if (currentTime >= intervals[1] && currentTime < intervals[2]) {
				// gradient 1
				selectedGradient = gradients.above_85[1];
			} else if (currentTime >= intervals[2] && currentTime < intervals[3]) {
				// gradient 2
				selectedGradient = gradients.above_85[2];
			} else if (currentTime >= intervals[3] && currentTime < intervals[4]) {
				// gradient 3
				selectedGradient = gradients.above_85[3];
			} else if (currentTime >= intervals[4] && currentTime < intervals[5]) {
				// gradient 4
				selectedGradient = gradients.above_85[4];
			} else if (currentTime >= intervals[5] && currentTime < intervals[6]) {
				// gradient 5
				selectedGradient = gradients.above_85[5];
			} else if (currentTime >= intervals[6] && currentTime < intervals[7]) {
				// gradient 6
				selectedGradient = gradients.above_85[6];
			} else if (currentTime >= intervals[7] && currentTime < sunset) {
				// gradient 7
				selectedGradient = gradients.above_85[7];
			} else {
				// gradient 8 (sunset)
				selectedGradient = gradients.above_85[8];
			}
		} else if (temp >= 40 && temp < 85) {
			// if between sunset and sunrise
			if (currentTime >= sunrise && currentTime < intervals[1]) {
				// gradient 0 (sunrise)
				selectedGradient = gradients.between_40_85[0];
			} else if (currentTime >= intervals[1] && currentTime < intervals[2]) {
				// gradient 1
				selectedGradient = gradients.between_40_85[1];
			} else if (currentTime >= intervals[2] && currentTime < intervals[3]) {
				// gradient 2
				selectedGradient = gradients.between_40_85[2];
			} else if (currentTime >= intervals[3] && currentTime < intervals[4]) {
				// gradient 3
				selectedGradient = gradients.between_40_85[3];
			} else if (currentTime >= intervals[4] && currentTime < intervals[5]) {
				// gradient 4
				selectedGradient = gradients.between_40_85[4];
			} else if (currentTime >= intervals[5] && currentTime < intervals[6]) {
				// gradient 5
				selectedGradient = gradients.between_40_85[5];
			} else if (currentTime >= intervals[6] && currentTime < intervals[7]) {
				// gradient 6
				selectedGradient = gradients.between_40_85[6];
			} else if (currentTime >= intervals[7] && currentTime < sunset) {
				// gradient 7
				selectedGradient = gradients.between_40_85[7];
			} else {
				// gradient 8 (sunset)
				selectedGradient = gradients.between_40_85[8];
			}
		} else if (temp < 40) {
			console.log("less than 40");
			// if between sunset and sunrise
			if (currentTime >= sunrise && currentTime < intervals[1]) {
				// gradient 0 (sunrise)
				selectedGradient = gradients.below_40[0];
			} else if (currentTime >= intervals[1] && currentTime < intervals[2]) {
				// gradient 1
				selectedGradient = gradients.below_40[1];
			} else if (currentTime >= intervals[2] && currentTime < intervals[3]) {
				// gradient 2
				selectedGradient = gradients.below_40[2];
			} else if (currentTime >= intervals[3] && currentTime < intervals[4]) {
				// gradient 3
				selectedGradient = gradients.below_40[3];
			} else if (currentTime >= intervals[4] && currentTime < intervals[5]) {
				// gradient 4
				selectedGradient = gradients.below_40[4];
			} else if (currentTime >= intervals[5] && currentTime < intervals[6]) {
				// gradient 5
				selectedGradient = gradients.below_40[5];
			} else if (currentTime >= intervals[6] && currentTime < intervals[7]) {
				// gradient 6
				selectedGradient = gradients.below_40[6];
			} else if (currentTime >= intervals[7] && currentTime < sunset) {
				// gradient 7
				selectedGradient = gradients.below_40[7];
			} else {
				// gradient 8 (sunset)
				selectedGradient = gradients.below_40[8];
			}
		} else {
			// fallback
			selectedGradient.startColor = "#000";
			selectedGradient.endColor = "#000";
			selectedGradient.statusBarStyle = "dark-content";
		}

		return selectedGradient;
	}

	renderContent = () => {
		return (
			<View>
				<Text style={{color: "#fff"}}>Get directions to your location</Text>
			</View>
		)
	}

	getConditionIcon(icon) {
		if (icon == "clear-day" || icon == "clear night") {
			return require("../assets/icons/cloud.json");
		} else if (icon == "rain") {
			return require("../assets/icons/rain.json");
		} else if (icon == "snow" || icon == "sleet") {
			return require("../assets/icons/snow.json");
		} else if (icon == "cloudy") {
			return require("../assets/icons/cloud.json");
		// } else if (icon == "partly-cloudy-day" || icon == "partly-cloudy-night") {
		// 	return require("../assets/icons/partly-cloudy.json");
		// } else if (icon == "wind") {
		// 	return require("../assets/icons/wind.json");
		// } else if (icon == "fog") {
		// 	return require("../assets/icons/fog.json");
		} else {
			return require("../assets/icons/cloud.json")
		}
	}

	render() {
		const next24hours = this.state.weatherData.hourly.data.slice(0, 24);
		const next7days = this.state.weatherData.daily.data;

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
				
				<BottomDrawer
					containerHeight={500}
					offset={0}
					startUp={false}
					roundedEdges={false}
					backgroundColor={"#242424"}
					shadow={false}
				>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
							top: 30
						}}
					>
						{next24hours.map(data => {
							return (
								<MisterPixel
									key={data.time}
									style={{
										width: 40,
										height: 39,
										textAlign: "center"
									}}
								>
									{Math.round(data.temperature)}° {"\n"}
									{moment(moment.unix(data.time)).format("ha")}
								</MisterPixel>
							);
						})}
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between"
						}}
					>
						<MisterPixel
							style={{
								width: 91,
								height: 45,
								textAlign: "center"
							}}
						>
							Wind {"\n"}
							{this.state.weatherData.currently.windSpeed}mph
          </MisterPixel>
						<MisterPixel
							style={{
								width: 91,
								height: 39,
								textAlign: "center"
							}}
						>
							Percipitation {"\n"}
							{this.state.weatherData.currently.precipProbability}%
          </MisterPixel>
						<MisterPixel
							style={{
								width: 91,
								height: 39,
								textAlign: "center"
							}}
						>
							Humidity {"\n"}
							{this.state.weatherData.currently.humidity}%
          </MisterPixel>
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between"
						}}
					>
						<MisterPixel
							style={{
								width: 103,
								height: 56,
								textAlign: "center"
							}}
						>
							<Image
								style={{ width: 49, height: 22.75 }}
								source={require('../assets/icons/sunrise.png')}
							/>
							{"\n"}
							Sunrise {"\n"}
							{moment(
								moment.unix(this.state.weatherData.daily.data[0].sunriseTime)
							).format("h:mm a")}
						</MisterPixel>
						<MisterPixel
							style={{
								width: 103,
								height: 56,
								textAlign: "center"
							}}
						>
							<Image
								style={{ width: 49, height: 22.75 }}
								source={require('../assets/icons/sunset.png')}
							/>
							{"\n"}
							Sunset {"\n"}
							{moment(
								moment.unix(this.state.weatherData.daily.data[0].sunsetTime)
							).format("h:mm a")}
						</MisterPixel>
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "space-between",
							paddingBottom: 50
						}}>
						{next7days.map(data => {
							return (
								<View
									key={data.time}
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "space-between"
								}}>
									<MisterPixel style={{width: 80}}>
										{moment(moment.unix(data.time)).format("dddd")}
									</MisterPixel>
									<MisterPixel style={{ width: 16 }}>
										{Math.round(data.temperatureLow)}
									</MisterPixel>
									<MisterPixel style={{ width: 16 }}>
										{Math.round(data.temperatureHigh)}
									</MisterPixel>
									<LottieView 
										style={{ width: 31 }} 
										source={this.getConditionIcon(data.icon)} 
										autoPlay 
										loop />
									{/* <MisterPixel style={{ width: 31 }}>
										{data.icon}

										
									</MisterPixel> */}
								</View>
							);
						})}
					</View>
				</BottomDrawer>
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