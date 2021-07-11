const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const generateDryTalk = require('./generate_dry-talk')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const dryTalk = generateDryTalk(option)
  res.render('index', { dryTalk, option })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})