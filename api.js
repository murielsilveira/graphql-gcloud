const router = require('express').Router()

router.get('/v1/products', (req, res) => {
  res.json([
    {title: 'shoe', price: 500},
    {title: 'mouse', price: 900},
  ])
})

module.exports = router
