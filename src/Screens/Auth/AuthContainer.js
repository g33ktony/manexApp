import React, { useState, useEffect } from 'react'
import Auth from './Auth'
import AsyncStorage from '@react-native-community/async-storage'
import auth from '@react-native-firebase/auth'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

function AuthContainer(props) {

	const [initilizing, setInitilizing] = useState(true)
	const [user, setUser] = useState()

	onAuthStateChanged = (user) => {
		setUser(user);
		if (initilizing) setInitilizing(false);
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, [])

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
				props.navigation.navigate('AuthLoading')
				
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

	signInAsync = async () => {
		await AsyncStorage.setItem('userToken', 'abc')
		props.navigation.navigate('App')
	}

	if (initilizing) return null

	return <Auth facebookLogin={facebookLogin} register={register} signInAsync={signInAsync} navigation={props.navigation}/>
}

export default AuthContainer