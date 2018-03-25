//a reducer takes a current state and an action and then
//returns an updated state based on the action type

//from what bucky said, you can have multiple reducers that handle
//a different thing, like a movie reducer, user reducer, etc.
//if movie is a component, a movie reducer will return a new state
//for that movie component which will update that movie component


//sets up an initial state just in case a base currency and rate
//is not passed in

//remember, state of a component is just a POJO
//e.g. this.state = {editing: true}
//which you can update using setState({editing: false})
//and you can call with this.state.editing to have access to it
//here you're returning POJO as a state which is what it's pose to be

//whenever a state gets changed, react automatically updates the view

const initialState = {
  baseCurrency: "Please select",
  rates: {}
};


//action creator just for reference:
/*
return {
type: "SWITCH_CURRENCY",

baseCurrency: baseCurrency,
rates: rates
};
*/


const reducer = (state = initialState, action) => {
  //action.type is the type you gave to the action
  //seems like it's just an identifier you can use

  switch(action.type) {


    case "SWITCH_CURRENCY":

      //here you're returning a new state, depending on what the values
      //were in the action
      return {
        baseCurrency: action.baseCurrency,
        rates: action.rates
      };



    //if action.type doesn't match w/e you specified, just return the
    //default initial state
    default: return state;
  }
};

export default reducer;
