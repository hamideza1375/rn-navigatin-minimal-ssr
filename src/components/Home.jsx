import React from 'react'
import { View, Text } from 'react-native'
import { Helmet } from 'react-helmet';
import s from './s.module.scss'

const Home = ({navigation}) => {

	return (
		<div className="application">
			<Helmet>
				<meta name="description" content="Home Page" />
				<title>Home Title</title>
			</Helmet>

			<View>
				<Text style={{ cursor: 'pointer' }} onClick={() => navigation.navigate('SSR')} >Home Home Home</Text>
				<Text style={{color:'red'}} >Home Home Home</Text>
			</View>
		</div>
	)
}


export default Home