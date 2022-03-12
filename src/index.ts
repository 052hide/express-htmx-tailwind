import express from 'express'
import path from 'path'

const app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/', (req, res) => {
  res.render('pages/index')
})
