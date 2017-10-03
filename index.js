const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello'
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(8080, () => {
  console.log('Server running on http://127.0.0.1:8080/')
})
