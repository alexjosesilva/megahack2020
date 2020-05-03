import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator } from 'react-navigation-drawer';

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import destaques from './src/pages/destaques';
import departamentos from './src/pages/departamentos';
import favoritos from './src/pages/favoritos';
import meus_pedidos from './src/pages/meus_pedidos';
import meus_vales from './src/pages/meus_vales';
import leitor_de_codigo_de_barra from './src/pages/leitor_de_codigo_de_barra';
import notificacoes from './src/pages/notificacoes';
import cartao_americanas from './src/pages/cartao_americanas';
import ache_uma_loja from './src/pages/ache_uma_loja';
import erica from './src/pages/erica';

import CustomDrawer from './src/components/CustomDrawer';

const Routes = createAppContainer(
	
	createDrawerNavigator({
		destaques,
		departamentos,
		favoritos,
		meus_pedidos,		
		meus_vales,
		leitor_de_codigo_de_barra,
		notificacoes,
		cartao_americanas,
		ache_uma_loja,
		erica
	}, {
		initialRouteName: 'destaques',
		//contentComponent: props => <CustomDrawer  {...props} />
		//contentComponent: CustomDrawer
	})
)

export default Routes;