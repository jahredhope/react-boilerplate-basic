export default new Proxy({}, {
  get: (target, name) => {
    return `mock-style-${name}`
  },
  set: (target, property, value, reciever) => {throw new Error(`Attempted to set style by CSS. Property: ${property}`)}
})
