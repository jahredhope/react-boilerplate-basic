import { combineReducers } from 'redux'
import counter from 'modules/counter'

function logWrapper(func) { // eslint-disable-line no-unused-vars
  return function(state, action){
    console.log('action', action) // eslint-disable-line no-console
    console.log('state', state) // eslint-disable-line no-console
    const result = func(state, action)
    console.log('result', result) // eslint-disable-line no-console
    return result
  }
}

const rootReducer = combineReducers({
  counter: logWrapper(counter)
})

export default rootReducer
