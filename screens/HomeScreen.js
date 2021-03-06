import React from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Dimensions
} from "react-native";
import * as ApiKeys from "../config";
import { MisterPixel } from "../components/StyledText";
import LottieView from "lottie-react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
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
		const apiKey = ApiKeys.API_KEYS.opencage;

		return fetch(
			`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${this.state.query}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					lat: responseJson.results[0].geometry.lat,
					lng: responseJson.results[0].geometry.lng,
					city: responseJson.results[0].components.city ? responseJson.results[0].components.city : this.titleCase(this.state.query)
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	getWeather(lat, lng) {
		const apiKey = ApiKeys.API_KEYS.darkSky;

		return fetch(
			`https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
		)
			.then(response => response.json())
			.then(responseJson => {
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
						value={this.state.query}
						onChangeText={query => this.setState({ query })}
					/>
				) : null}

				{!this.state.isFetchingData ? (
					<TouchableOpacity onPress={this.onPress} disabled={this.state.query ? false : true}>
						<View style={styles.button}>
							<MisterPixel style={[styles.buttonLabel, !this.state.query ? styles.disabledBtn : null]}>Start</MisterPixel>
						</View>
					</TouchableOpacity>
				) : null}

				{this.state.isFetchingData ? (
					<LottieView
						style={{ width: 190 }}
						source={require('../assets/icons/loading.json')}
						autoPlay
						loop />
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
		width: SCREEN_WIDTH - 80,
		maxWidth: 368,
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
		color: "#000",
		textAlign: "center"
	}
});