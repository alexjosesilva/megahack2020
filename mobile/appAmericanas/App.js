import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator } from 'react-navigation-drawer';

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';

const Routes = createAppContainer(
	
	createDrawerNavigator({
		Home,
		destaques,
		departamentos,
		favoritos,
		meuspedidos,
		meusvales,
		leitordecodigosdebarras,
		notificicaçoes,
		cartaoamericanas,
		acheumaloja,
		ericaAssistentedeCompras,
		Contato,
	}, {
			initialRouteName: 'Home'
	})
)

export default Routes;