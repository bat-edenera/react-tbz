import {createStore,applyMiddleware,compose} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from './reducer';
var logger = createLogger();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(logger),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
export default store