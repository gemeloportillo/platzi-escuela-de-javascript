import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

import App from './routes/App';

//render recibo dos parametros el nombre del componente y donde lo recibe

const initialState = {
  cart: [],
  salas: [
    {
      'id': 1,
      'tipo': 'salas',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/salas/00.jpg',
      'title': 'Sala Esquinera Bonao Estilo Contemporáneo',
      'price': '$20,200',
      'sale': '$18,000',
      'description': 'Sala Esquinera Bonao Estilo Contemporáneo Tapizada en Lino Gris ideal para espacios amplios ya no tendrás escusa podrás recibir a toda tu familia y pasar momentos únicos de charla mientras admiran tu buen gusto.'
    },
    {
      'id': 2,
      'tipo': 'salas',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/salas/01.jpg',
      'title': 'Sala Versa 3 Piezas Tapizada en Linato',
      'price': '$22,100',
      'sale': '$16,000',
      'description': 'dfas fasd asd asdfasdfasdf asdfasd asdfa sd'
    },
    {
      'id': 3,
      'tipo': 'salas',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/salas/08.jpg',
      'title': 'Sala Esquinera Jazz Tapizada en Lino Gris',
      'price': '$6,999',
      'sale': '$6,000',
      'description': 'badfafadsvdfaf adsfsdf asdf adsf'
    },
    {
      'id': 4,
      'tipo': 'salas',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/salas/03.png',
      'title': 'Sala Moss Tapizada Estilo Contemporáneo',
      'price': 2500,
      'sale': 1000,
      'description': 'sdf asd fsad sdfsad asdf sdf sdf sd f'
    },
    {
      'id': 5,
      'tipo': 'salas',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/salas/04.jpg',
      'title': 'Sala Luxor Esquinera Tapizada en Linato',
      'price': 2500,
      'sale': 1000,
      'description': 'dsf asdf sadf asdf sd sdfds '
    },
    {
      'id': 6,
      'tipo': 'salas',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/salas/05.jpg',
      'title': 'Sala Betel 2 Piezas Estilo Contemporáneo',
      'price': 2500,
      'sale': 1000,
      'description': ' dsfasd sadf sdfsad fasdf sdfsdf sdf sdf'
    },
  ],
  recamaras: [
    {
      'id': 2,
      'tipo': 'recamaras',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/recamaras/00.jpg',
      'title': 'Recámara Matrimonial Pinot 3 piezas',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfs sdf sdf sd fsdfsdf fsdfsdfsdfsdfs'
    },
    {
      'id': 2,
      'tipo': 'recamaras',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/recamaras/01.jpg',
      'title': 'Recámara Matrimonial Espinela',
      'price': 2500,
      'sale': 1000,
      'description': 'sfsd sdf sdfsdf sdfsdf sdfsdfsdfsdf'
    },
    {
      'id': 2,
      'tipo': 'recamaras',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/recamaras/02.jpg',
      'title': 'Recámara Matrimonial Sayula',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsd fsd fsdf sfsfsdfsdfsadfasdfsdfsdfasd sdf'
    },
    {
      'id': 2,
      'tipo': 'recamaras',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/recamaras/03.jpg',
      'title': 'Recámara Matrimonial Lluna 5 Piezas',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsdf asdf sd sadfsdf sdfsdfsd'
    },
    {
      'id': 2,
      'tipo': 'recamaras',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/recamaras/04.jpg',
      'title': 'Recámara Individual Estonia 3 Piezas',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsd sdf sdfs fsadf sdfsad'
    },
    {
      'id': 2,
      'tipo': 'recamaras',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/recamaras/05.jpg',
      'title': 'Recamara Individual Palazi 3 Piezas',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfs sdfs fsd sdfsdfsdf s'
    },
  ],
  comedores: [
    {
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/00.jpg',
      'title': 'Antecomedor Platina Estilo Contemporáneo',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsd sdfs sdfs fsdf sdf safsdaf'
    },
    {
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/01.jpg',
      'title': 'Comedor Vivenza 5 Sillas Estilo Transicional',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfs sdf sd fsdfsadfsdfs sdfsdfsdfasd'
    },{
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/02.jpg',
      'title': 'Comedor Aruba Estilo Contemporáneo',
      'price': 2500,
      'sale': 1000,
      'description': 'Camiseta con el logo de la PlatziConf'
    },{
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/03.jpg',
      'title': 'Comedor Mérida 6 Sillas Estilo Transicional',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsd sdf sdfsdaf sadfsdf sadfsdfsadf'
    },{
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/04.jpg',
      'title': 'Antecomedor Ontario 6 Sillas',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsdf sdfsdf sdf sdf sdf sdf sdfsda f'
    },{
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/06.jpg',
      'title': 'Comedor Veneto Estilo Contemporáneo',
      'price': 2500,
      'sale': 1000,
      'description': 'sdfsdf sdf sdf sadf sadfsdfsdfsdf'
    },
  ],
  products: [
    {
      'id': 1,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/00.jpg',
      'title': 'Camiseta',
      'price': 2500,
      'sale': 1000,
      'description': 'Camiseta con el logo de la PlatziConf'
    },
    {
      'id': 2,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/01.jpg',
      'title': 'Mug',
      'price': 10,
      'sale': 1000,
      'description': 'Taza con el eslogan de Platzi'
    },
    {
      'id': 3,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/02.jpg',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
    {
      'id': 4,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/03.jpg',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
    {
      'id': 5,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/04.jpg',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
    {
      'id': 6,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/05.png',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
    {
      'id': 7,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/06.jpg',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
    {
      'id': 8,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/07.jpg',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
    {
      'id': 9,
      'tipo': 'comedores',
      'image': 'https://gemeloportillo.github.io/assets/images/muebles/comedores/08.jpg',
      'title': 'Pin',
      'price': 4,
      'sale': 1000,
      'description': 'Pin con el logo de Platzi'
    },
  ],
  'user': {},
  'playing': {},
  'mylist': []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
