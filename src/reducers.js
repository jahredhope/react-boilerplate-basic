import { combineReducers } from 'redux'
import counter from 'modules/counter'

// let datas = () => ({})
//
// function logWrapper(func) {
//   return function(state, action){
//     console.log('action', action) // eslint-disable-line no-console
//     console.log('state', state) // eslint-disable-line no-console
//     var result = func(state, action)
//     console.log('result', result) // eslint-disable-line no-console
//     return result
//   }
// }
// counter = logWrapper(counter)


const rootReducer = combineReducers({
  counter
})

export default rootReducer
