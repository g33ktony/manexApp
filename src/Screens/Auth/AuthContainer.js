import React, { Component } from 'react'
import Auth from './Auth'
import AsyncStorage from '@react-native-community/async-storage'
import auth from '@react-native-firebase/auth'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

class AuthContainer extends Component {

	facebookLogin = () => {
		return LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then(res => {
      	console.log("TCL: facebookLogin -> res", res)
				if (res.isCancelled) {
					throw new Error('User cancelled the login process')
				}				
			})
			.then(AccessToken.getCurrentAccessToken)
			.then( data => {
				if (!data) {
					throw new Error('Something went wrong obtaining access token');
				}
				return data
			})
			.then(data => {
				return auth.FacebookAuthProvider.credential(data.accessToken)
			})
			.then( credential => {
    		console.log("TCL: facebookLogin -> credential facebook", credential)
				return auth().signInWithCredential(credential)
			})
			.then( res => {
				console.log("TCL: facebookLogin -> user firebase", res.user)
				this.props.navigation.navigate('AuthLoading')
				
			})
			.catch(console.log)

		// const data = await ;

		// const credential = auth.FacebookAuthProvider.credential(data.accessToken);
		// await auth().signInWithCredential(credential)
	}

	register = async (email, password) => {
		try {
			await auth().createUserWithEmailAndPassword(email, password);
		} catch (e) {
			console.error(e.message)
		}
	}

	// if (initilizing) return null

	render() {
		return <Auth facebookLogin={this.facebookLogin} register={this.register} navigation={this.props.navigation}/>
	}
}

export default AuthContainer