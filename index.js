const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema, root } = require('./schema')
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
