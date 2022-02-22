import React from "react";
import { createStore } from "redux";
import { combineReducers } from "redux";
// import  reduxLogger from 'redux-logger';
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const App = () => {
  const logger = createLogger();
  const BUY_CAKE = "BUY-CAKE";
  const BUY_ICECREAM = "BUY-ICECREAM";

  const buyCake = () => {
    return {
      type: BUY_CAKE,
      info: "First redux action",
    };
  };
  const buyIceCream = () => {
    return {
      type: BUY_ICECREAM,
    };
  };

  //{preState,action}=>newState;
  const initialCakeState = {
    numberOfCakes: 10,
  };
  const initialIceCreamState = {
    numberOfIceCream: 20,
  };

  // const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case BUY_CAKE:
  //       return {
  //         ...state,
  //         numberOfCakes: state.numberOfCakes - 1,
  //       };
  //       case BUY_ICECREAM:
  //       return {
  //         ...state,
  //         numberOfIceCream: state.numberOfIceCream - 1,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  const Cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,
          numberOfCakes: state.numberOfCakes - 1,
        };

      default:
        return state;
    }
  };
  const IceCreamreducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,
          numberOfIceCream: state.numberOfIceCream - 1,
        };
      default:
        return state;
    }
  };
  const rootReducer = combineReducers({
    cake: Cakereducer,
    iceCream: IceCreamreducer,
  });
  const store = createStore(rootReducer, applyMiddleware(logger));
  console.log("initial state", store.getState());
  const unsubscribe = store.subscribe(() =>
    console.log("updated State", store.getState())
  );
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());

  unsubscribe();
  return <div>App</div>;
};

export default App;
