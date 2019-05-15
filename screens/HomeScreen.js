import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { MisterPixel } from "../components/StyledText";
import LottieView from "lottie-react-native";

export default class HomeScreen extends React.Component {
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
			})
			.catch(error => {
				console.error(error);
			});;
	}

	// utility method
	titleCase(str) {
		return str.toLowerCase().split(" ").map(word => {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}

	render() {
		return (
			<View style={[styles.container, { flex: 1 }]}>
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