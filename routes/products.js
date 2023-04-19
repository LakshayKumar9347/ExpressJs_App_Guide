const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.render('products.ejs', {
      title: "My Product Page"
    })
  })

module.exports = router