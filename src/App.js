import React from 'react'
import Home from './components/Home'
import SSR from './components/SSR'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createNativeStackNavigator()

const App = (prop) => {
	if (prop.ssr) return (
		<NavigationContainer>
			{(prop.location.pathname === '/ssr') && <SSR />
				||
				(prop.location.pathname === '/home') && <Home />}
		</NavigationContainer>

	)
	else
		return (
			<Tab.Navigator >
				<Tab.Screen initialParams={{ key: 'home' }} name="Home" options={{ title: 'Home Title' }} component={Home} />
				<Tab.Screen initialParams={{ key: 'ssr' }} name="SSR" options={{ title: 'SSR Title' }} children={(props) => <SSR {...props} />} />
				<Tab.Screen name="NotFound"  >{() => (<h2 style={{ color: 'red', width: 70, margin: "0 auto" }} >404</h2>)}</Tab.Screen>
			</Tab.Navigator>
		)
}

export default App