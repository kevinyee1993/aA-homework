//imports the function createStore from redux so you can use it
import { createStore } from 'redux';
import reducer from './reducer';


//createStore function takes one arg which is the reducer
//reducer contains all the info of the state of the app that you wanna
//pass in to the store
const store = createStore(reducer);


//exports the state of the store
export default store;
