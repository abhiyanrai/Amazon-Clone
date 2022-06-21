import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleware = [thunk];
if(process.env.Node_ENV === "development"){
    middleware.push(logger);
}

// function logger({ getState }) {
//     return next => action => {
//       console.log('will dispatch', action)
  
//       // Call the next dispatch method in the middleware chain.
//       const returnValue = next(action)
  
//       console.log('state after dispatch', getState())
  
//       // This will likely be the action itself, unless
//       // a middleware further in chain changed it.
//       return returnValue
//     }
//   }

 
//   function logger2({ getState }) {
//     return next => action => {
//       console.log('will dispatch 2', action)
  
//       // Call the next dispatch method in the middleware chain.
//       const returnValue = next(action)
  
//       console.log('state after dispatch 2', getState())
  
//       // This will likely be the action itself, unless
//       // a middleware further in chain changed it.
//       return returnValue
//     }
//   }  

const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));

export default store;