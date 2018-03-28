import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

//make it a var so it doesn't get invoked immediately
//createStore takes a main reducer(which contains all the reducers)
//and then makes a store out of it
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
