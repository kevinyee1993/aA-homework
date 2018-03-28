import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';

export const receiveSearchGiphys = (giphys) => {

  //returns an action object as well as the giphy data
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  };
};
