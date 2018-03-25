import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import store from './store';

document.addEventListener("DOMContentLoaded", function(){

  //passing in a property to Widget component which sets the store
  //equal to the entire store aka all the different data combined into
  //one place
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});
