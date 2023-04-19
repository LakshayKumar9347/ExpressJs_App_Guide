const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/index')
const productRrouter = require('./routes/products')
// const PORT = 300 
// ↑ here we are hard coding the port value but what happen if port is not available in system ↓ so we have add OR condition if port is not free then use || port number 3000 
const PORT = process.env.PORT || 3000
// Here we are using template engines ↓ EJS embedded javascript template engine
app.set('view engine', 'ejs')
//app.set('views',path.join(__dirname ,'templates')) //for change the name
//but we are going to use by default name which is VIEWS
// console.log(app.get('views'))

// This is called routing ↓ how to handle user request endpoint when method is get
// app.get('/',(req,res)=>{
//     res.send("Server is Live :) ")
// })
// app.get('/', (req, res) => {
//     res.render('index.ejs', {
//         title: 'Express | HOME'
//     })
// })
// app.get('/about', (req, res) => {
//     res.render('about.ejs', {
//         title: "Express | ABOUT"
//     })
// })
console.log("Just checking How Commint or file UPdation work on Github dont worry its just for test purpose")
//This is called Static Middleware  ↓
// because it  will handle request and response on the behalf of us hence static is a middleware
// static midlle ware is used to server static file
app.use(express.static('public'))
app.use('/', router);
app.use(productRrouter)
//  -> OR 
// app.use(router) 
//→ declare the routes this will tell express to search for routes folder to know how to perform routing 

// How to download a file
// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/public/index.html')
// })
app.listen(PORT, () => {
    console.log(`Production Server is Running at Port ${PORT} `)
})
// This is created by Lakshay Kumar Kashyap
// With All rights and Copyrights on it