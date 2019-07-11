import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

// // import Auth from './Auth

// function Auth(props) {
	
// 		return (
// 			<View>
// 				<Text>Auth</Text>
// 			</View>
// 		)
// }

// export default Auth

class SignInScreen extends Component {

	static navigationOptions = {
		title: 'Please sign in',
	};

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Bienvenido a Manex</Text>
				
				<Button title="Sign in!" onPress={() => this.props.facebookLogin()} />
			</View>
		);
	}

	
}

export default SignInScreen

// class HomeScreen extends Component {
// 	static navigationOptions = {
// 		title: 'Welcome to the app!',
// 	};

// 	render() {
// 		return (
// 			<View>
// 				<Button title="Show me more of the app" onPress={this._showMoreApp} />
// 				<Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
// 			</View>
// 		);
// 	}

	// _showMoreApp = () => {
	// 	this.props.navigation.navigate('Other');
	// };

// 	_signOutAsync = async () => {
// 		await AsyncStorage.clear();
// 		this.props.navigation.navigate('Auth');
// 	};
// }