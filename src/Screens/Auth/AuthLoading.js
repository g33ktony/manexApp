import React, { useState, useEffect } from 'react'
import {
	ActivityIndicator,
	StatusBar,
	View,
} from 'react-native'
import auth from '@react-native-firebase/auth'

function AuthLoading(props) {

	const [initilizing, setInitilizing] = useState(true)
	const [user, setUser] = useState()

	onAuthStateChanged = (user) => {
		setUser(user);
		if (initilizing) setInitilizing(false);
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	if (initilizing) return null

	console.log("TCL: AuthLoading -> user", user)
	if (!user) {
		return props.navigation.navigate('Auth')
	}

	if(user) {
		return props.navigation.navigate('App');
	}

	return (
		<View>
			<ActivityIndicator />
			<StatusBar barStyle="default" />
		</View>
	)
}

export default AuthLoading