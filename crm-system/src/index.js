import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'; 
import Routes from './routes/routes'
import store from './store/configureStore'
import { Provider } from 'react-redux' 

store.subscribe(() => console.log(store.getState()))

const jsx = (
<Provider store={store}>
  <Routes /> 
</Provider>
);


ReactDOM.render( jsx, document.getElementById('root'));   

   