import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Auth, { AuthLoading } from '../Screens/Auth'
import Home from '../Screens/Home'


// export default createAppContainer(TabNavigator);


// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoading,
		App: Home,
		Auth: Auth,
	},
	{
		initialRouteName: 'AuthLoading',
	}
));