import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
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
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
				<View style={{ width: wp('65%'), height: hp('25%'), backgroundColor: 'red', marginBottom: 16 }}>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Here goes the logo</Text>
					</View>
				</View>
				<View style={{ width: wp('90%'), height: hp('45%'), backgroundColor: 'yellow', marginBottom: 16, alignItems: 'center', padding: 16  }}>
					<View style={{ marginBottom: 16 }}>
						<Text style={{ color: 'black', fontWeight: 'bold', fontSize: 21 }}>Bienvenido a Manex</Text>
					</View>
					<View>
						
					</View>

				</View>
				<View style={{ width: wp('90%'), height: hp('18%'), backgroundColor: 'pink', alignItems: 'center' }}>
					<Button title="Inicio de sesión con Facebook" onPress={() => this.props.facebookLogin()} />
				</View>
				{/* <Text>Bienvenido a Manex</Text>
				
				<Button title="Sign in!" onPress={() => this.props.facebookLogin()} /> */}
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