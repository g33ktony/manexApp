import React, { Component } from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-navigation"
const routes = ["Home", "Chat", "Profile"]
// import { Examples } from '@shoutem/ui';

export default class SideBar extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, paddingLeft: 16, backgroundColor: 'blue' }}>
				<Text style={{ color: 'red' }}>lorem</Text>
				{/* <Examples /> */}
			</SafeAreaView>
		);
	}
}