const selectCurrency = (baseCurrency, rates) => {

  return {
    type: "SWITCH_CURRENCY",

    //What exactly do these next 2 lines do?

    //Looks like these are just properties you can then call later
    //e.g. if you look at the reducer file, when you wanna access
    //this action's base currency value, type action.baseCurrency
    baseCurrency: baseCurrency,
    rates: rates


  };

};

export default selectCurrency;
