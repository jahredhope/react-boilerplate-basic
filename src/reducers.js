import { combineReducers } from 'redux';

import {} from './actions';

let datas = () => {}

function logWrapper(func) {
  return function(state, action){
    console.log('action', action); // eslint-disable-line no-console
    console.log('state', state); // eslint-disable-line no-console
    var result = func(state, action);
    console.log('result', result); // eslint-disable-line no-console
    return result;
  };
}
datas = logWrapper(datas);

const app = combineReducers({
  datas
});

export default app;
