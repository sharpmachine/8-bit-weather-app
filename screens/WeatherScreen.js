import React from 'react';
import {
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

	getConditionIcon(icon) {
		if (icon == "clear-day" || icon == "clear night") {
			return require("../assets/icons/clear-day.json");
		} else if (icon == "rain") {
			return require("../assets/icons/rain.json");
		} else if (icon == "snow" || icon == "sleet") {
			return require("../assets/icons/snow.json");
		} else if (icon == "cloudy") {
			return require("../assets/icons/cloudy.json");
		} else if (icon == "partly-cloudy-day" || icon == "partly-cloudy-night") {
			return require("../assets/icons/partly-cloudy-day.json");
		} else if (icon == "wind") {
			return require("../assets/icons/wind.json");
		} else if (icon == "fog") {
			return require("../assets/icons/fog.json");
		} else {
			return require("../assets/icons/cloudy.json")
		}
	}

	renderKeyDetails = () => {
		const topDetails = [
			{
				title: "city_name",
				display: this.state.city,
				style: { 
					fontSize: 24, 
					marginTop: 60, 
					marginBottom: 8
				}
			},
			{
				title: "city_date_time",
				display: `${moment(
					moment
						.unix(this.state.weatherData.currently.time)
						.tz(this.state.weatherData.timezone)
				)
					.format("h:mma  MMMM D")}, 1988`,
				style: {
					marginBottom: 8
				}
			},
			// {
			// 	title: "city_current_time",
			// 	display: moment(
			// 		moment
			// 			.unix(this.state.weatherData.currently.time)
			// 			.tz(this.state.weatherData.timezone)
			// 	)
			// 		.format("h:mma"),
			// 	style: {}
			// }
		]

		const centerDetails = [
			{
				title: "city_current_temp",
				display: Math.round(this.state.weatherData.currently.temperature) + "°",
				style: {
					fontSize: 58,
					marginBottom: 8,
					left: 15 / 2
				}
			},
			{
				title: "city_high_low",
				display: `High: ${Math.round(this.state.weatherData.daily.data[0].temperatureHigh)}°  Low: ${Math.round(this.state.weatherData.daily.data[0].temperatureLow)}°`,
				style: {
					marginBottom: 8
				}
			},
			{
				title: "city_current_condition",
				display: this.state.weatherData.currently.summary,
				style: {
					marginBottom: 16
				}
			}
		]

		return (
			<View style={{
				flex: 1
			}}>
				<View style={{
					flex: 1,
					alignItems: "center",
				}}>
					{topDetails.map(detail => {
						return (
							<MisterPixel
								key={detail.title} 
								style={detail.style}
							>
								{detail.display}
							</MisterPixel>
						)
					})}
				</View>
				<View style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					top: -200
				}}>
					{centerDetails.map(detail => {
						return (
							<MisterPixel
								key={detail.title}
								style={detail.style}
							>
								{detail.display}
							</MisterPixel>
						)
					})}
					<LottieView
						style={{
							width: 31
						}}
						source={this.getConditionIcon(this.state.weatherData.currently.icon)}
						autoPlay
						loop />
				</View>
			</View>
		)
	}

	renderHourly = () => {
		const now = new Date();
		const hoursLeftInDay = 23 - now.getHours();
		const hourlyForecast = this.state.weatherData.hourly.data.slice(0, hoursLeftInDay + 6);

		return (
			<View style={{flex: 1}}>
				<View style={{height: 50}}>
					<ScrollView 
						horizontal={true} 
						showsHorizontalScrollIndicator={false}>
					<TouchableOpacity
						activeOpacity={1}
						style={{
							flexDirection: "row"
						}}>
						{hourlyForecast.map((data, index) => {
							return (
								<View
									key={index}
									style={{
										height: 40,
										marginRight: 16
									}}>
									<MisterPixel
										style={{
											textAlign: "center",
											marginBottom: 12
										}}>
										{Math.round(data.temperature)}°
									</MisterPixel>
									<MisterPixel
										style={{
											textAlign: "center"
										}}>
										{moment(moment.unix(data.time)).format("ha")}
									</MisterPixel>
								</View>
							);
						})}
					</TouchableOpacity>
				</ScrollView>
				</View>
			</View>
		)
	}

	renderCurrentDetails = () => {
		const details = [
			{
				title: "Wind",
				data: Math.round(this.state.weatherData.currently.windSpeed),
				unit: "mph"
			},
			{
				title: "Percipitation",
				data: Math.round(this.state.weatherData.currently.precipProbability * 100),
				unit: "% chance"
			},
			{
				title: "Humidity",
				data: Math.round(this.state.weatherData.currently.humidity * 100),
				unit: "%"
			}
		]

		return (
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "stretch"
				}}
			>
				{details.map((detail, index) => {
					return (
						<View 
							key={index}
							style={{ height: 40 }}
						>
							<MisterPixel style={{ marginBottom: 8 }}>
								{detail.title}
							</MisterPixel>
							<MisterPixel>
								{detail.data}{detail.unit}
							</MisterPixel>
						</View>
					);
				})}
			</View>
		)
	}

	renderSunriseSunset = () => {
		const details = [
			{
				title: "Sunrise",
				time: this.state.weatherData.daily.data[0].sunriseTime,
				image: require('../assets/icons/sunrise2x.png')
			},
			{
				title: "Sunset",
				time: this.state.weatherData.daily.data[0].sunsetTime,
				image: require('../assets/icons/sunset2x.png')
			}
		];

		return (
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "stretch"
				}}
			>
			{details.map((detail, index) => {
				return(
					<View
						key={index}
						style={{
							height: 56,
							justifyContent: 'center',
							alignItems: 'center',
						}}>

						<Image
							style={{ 
								width: 49, 
								height: 30,
								marginBottom: 16
							}}
							source={detail.image}
						/>

						<MisterPixel style={{textAlign: "center"}}>
							{detail.title} {moment(
								moment
									.unix(detail.time)
									.tz(this.state.weatherData.timezone)
									).format("h:mma")}
						</MisterPixel>

					</View>
				)
			})}
			</View>
		)
	}

	renderDailyForecast = () => {
		const dailyForecast = this.state.weatherData.daily.data.slice(1, 6);

		return (
			<View
				style={{
					flex: 0
				}}>
				{dailyForecast.map((data, index) => {
					return (
						<View
							key={index}
							style={{
								flex: 0,
								flexDirection: "row",
								alignItems: "center",
								marginTop: 20
						}}>
							<View
								style={{
									flex: 1,
									flexDirection: "row",
									flexGrow: 1
								}}>
								<MisterPixel style={{ 
									flexGrow: 1,
									width: 78
									}}>
									{moment(moment.unix(data.time)).format("dddd")}
								</MisterPixel>
							</View>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>

								<MisterPixel 
									style={{
										width: 22 + 16,
										textAlign: "left",
								}}>
									{Math.round(data.temperatureLow)}°
								</MisterPixel>
								<MisterPixel 
									style={{
										width: 22 + 16,
										textAlign: "left",
								}}>
									{Math.round(data.temperatureHigh)}°
								</MisterPixel>
								<LottieView
									style={{
										width: 31
									}}
									source={this.getConditionIcon(data.icon)}
									autoPlay
									loop />
							</View>
						</View>
					);
				})}
			</View>
		)
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle={this.getGradient().statusBarStyle} />
				<SafeAreaView style={{ backgroundColor: this.getGradient().startColor }} />
					<LinearGradient
						colors={[
							this.getGradient().startColor,
							this.getGradient().endColor
						]}
						style={{ flex: 1 }}>
						{this.renderKeyDetails()}
					</LinearGradient>
				<BottomDrawer
					containerHeight={580}
					startUp={false}
					roundedEdges={true}
					downDisplay={580 - 120}
					backgroundColor={"#242424"}
					shadow={false}>
					<View 
						style={{
							flex: 1,
							padding: 40
						}}>
						{this.renderHourly()}
						{this.renderCurrentDetails()}
						{this.renderSunriseSunset()}
						{this.renderDailyForecast()}
					</View>
				</BottomDrawer>
			</View>
		);
	}
}