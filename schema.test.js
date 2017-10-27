const { root } = require('./schema')

// todo: continue in the correct way

describe('hello', () => {
  it('should return Hello', () => {
    expect(root.hello()).toBe('Hello')
  })
})

describe('sum', () => {
  it('should sum a and b', () => {
    expect(root.sum({a: 4, b: 1})).toBe(5)
  })
})

describe('allProducts', () => {
  it('should return two products', () => {
    expect(root.allProducts().length).toBe(2)
  })
})
