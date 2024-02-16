import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App';
import { NavigationContainer } from '@react-navigation/native';

const linking = {
	config: {
		screens: {
			Home: '/:key',
			SSR: '/ssr',

			NotFound: '*'
		},
	},
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<NavigationContainer linking={linking} >
// 		<div style={{width:'100%',height:'100%'}} >
// 		<App />
// 		</div>
// 	</NavigationContainer>
// );

ReactDOM.hydrateRoot(document.getElementById('root'),
<NavigationContainer linking={linking} >
<div style={{width:'100%',height:'100%'}} >
<App />
</div>
</NavigationContainer>
);




