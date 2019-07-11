import React, { Component } from 'react'
import {
	ActivityIndicator,
	StatusBar,
	View,
} from 'react-native'
import auth from '@react-native-firebase/auth'

class AuthLoading extends Component {

	// const [initilizing, setInitilizing] = useState(true)
	// const [user, setUser] = useState()

	// onAuthStateChanged = (user) => {
	// 	setUser(user);
	// 	if (initilizing) setInitilizing(false);
	// }
	componentDidMount() {
		console.log(auth().currentUser)
		auth().currentUser ? this.props.navigation.navigate('App') : this.props.navigation.navigate('Auth')
	}

	// useEffect(() => {
	// 	const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
	// 	return subscriber;
	// }, []);

	// if (initilizing) return null

	// console.log("TCL: AuthLoading -> user", user)
	// if (!user) {
	// 	return props.navigation.navigate('Auth')
	// }

	// if(user) {
	// 	return props.navigation.navigate('App');
	// }

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='black' />
				<StatusBar barStyle="default" />
			</View>
		)
	}
}

export default AuthLoading