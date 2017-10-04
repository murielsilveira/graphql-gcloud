const { root } = require('./schema')

it('should return Hello', () => {
  expect(root.hello()).toBe('Hello')
})
