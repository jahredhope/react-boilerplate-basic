const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


export default function counter(state = 0, action = {}) {
  switch (action.type) {
  case INCREMENT:
    return state+0.55
  case DECREMENT:
    return state-0.44
  default:
    return state
  }
}

export const decrease = () => ({type: DECREMENT})
export const increase = () => ({type: INCREMENT})
