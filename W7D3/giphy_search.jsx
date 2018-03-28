import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//if importing a function, need to have it in curly braces?!?!
import { fetchSearchGiphys } from './util/api_util';
import { receiveSearchGiphys } from './actions/giphy_actions';


document.addEventListener('DOMContentLoaded', () => {
  //create a store here
  const store = configureStore();
  const root = document.getElementById('root');


  ReactDOM.render(<Root store={store} />, root);
});
