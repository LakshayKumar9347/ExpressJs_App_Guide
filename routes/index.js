const express = require('express')
const router = express.Router()
const apiKeyMiddlware = require('../middlewares/apiKey')
// const router = require('express').Router() another way to create this router variable

// router level middleware
// router.use(apiKeyMiddlware)  →here it will work for all the routes
//↓ we can also add this in the Server.js
// app.use(apiKeyMiddlware)  -> but i'll prefer it in the routers

const path = require('path')
// These are the Actual routes we are going to use
router.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Express | HOME'
  })
  // console.log(__dirname)
})
router.get('/about', (req, res) => {
  res.render('about.ejs', {
    title: "Express | ABOUT"
  })
})
// here apiKeyMiddlware is only applicable in  /api/products
// single route based or route base middleware
router.get('/api/products',apiKeyMiddlware, (req, res) => {
  // adding multiple middlewares
  // router.get('/api/products',[apiKeyMiddlware,apiKeyMiddlware] (req, res)
res.json([
    {
      id: '1',
      name: 'Chrome'
    },
    {
      id: '2',
      name: 'firefox'
    },
  ])
})
module.exports = router;