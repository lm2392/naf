const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'server'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('static/myexample'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
