import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"

export default class ShadowRect extends React.Component {
	render() {
		return (
			<View
				testID={this.props.testID}
				style={{ ...this.props.style, ...styles.container }}
			>
				{this.props.children}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.09,
		shadowRadius: 20,
		elevation: 6,
		marginLeft: 26,
		marginRight: 26,
		borderRadius: 4,
		padding: 20
	}
})
