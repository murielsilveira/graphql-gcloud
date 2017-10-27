const { buildSchema } = require('graphql')

module.exports = {
  schema: buildSchema(`
    type Product {
      title: String!
      price: Float!
    }

    type Query {
      hello: String
      sum(a: Int!, b: Int!): Int!
      allProducts: [Product]
    }
  `),
  root: {
    hello: () => {
      return 'Hello'
    },
    sum: ({a, b}) => {
      return a + b
    },
    allProducts: () => {
      return [
        {title: 'Shoe', price: 1000.11},
        {title: 'TV', price: 10},
      ]
    },
  },
}
