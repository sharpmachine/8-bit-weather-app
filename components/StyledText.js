import React from 'react';
import { Text } from 'react-native';

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