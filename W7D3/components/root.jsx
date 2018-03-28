import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

//where did store come from here?
const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <GiphysSearchContainer />
    </Provider>
  );
};


export default Root;
