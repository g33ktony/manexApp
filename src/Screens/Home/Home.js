import React, { Component } from "react"
import { View,  Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { SideBar } from '../../Components/SideBar'
import { createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import auth from '@react-native-firebase/auth'

class HomeScreen extends Component {

	signOut = () => {
		auth().signOut()
		this.props.navigation.navigate('Auth')
		// AsyncStorage.removeItem('userToken')

	}

	componentDidMount() {
		console.log('User', auth().currentUser)
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home!</Text>
				<TouchableOpacity onPress={() => this.signOut()}>
					<Text>Sign Out</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

class SettingsScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings!</Text>
			</View>
		);
	}
}
const TabNavigator = createBottomTabNavigator({
	Home: HomeScreen,
	Settings: SettingsScreen,
});

const HomeScreenRouter = createDrawerNavigator(
  {
		Home: { screen: TabNavigator },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);


export default HomeScreenRouter
