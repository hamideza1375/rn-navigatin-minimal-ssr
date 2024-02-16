import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import { Helmet } from 'react-helmet';
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const SSR = (prop) => {
	const navigation = useNavigation();

	useFocusEffect(useCallback(() => {
		console.log(prop);
	}, []))

	return (
		<div className="application">
			<Helmet>
				<meta name="description" content="SSR Page" />
				<title>SSR Title</title>
			</Helmet>

			<View>
				<Text style={{ cursor: 'pointer' }} onClick={() => navigation.navigate('Home')} >SSR SSR SSR</Text>
				<Text style={{ color: 'red' }} >SSR SSR SSR</Text>
			</View>
		</div>
	)
}


export default SSR