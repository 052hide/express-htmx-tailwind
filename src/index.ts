import express from 'express'
import path from 'path'

const app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  '/htmx',
  express.static(path.join(__dirname, '../node_modules/htmx.org/dist'))
)

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/dashboard', (req, res) => {
  res.render('pages/dashboard', {
    username: 'aaaaa',
  })
})

app.post('/clicked', (req, res) => {
  console.log('aaa')
  res.render('pages/index')
})
