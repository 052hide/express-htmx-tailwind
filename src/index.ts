import express from 'express'
import path from 'path'
import { TopRouter } from './routes'

const app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))
app.use(
  '/htmx',
  express.static(path.join(__dirname, '../node_modules/htmx.org/dist'))
)

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.use('/', TopRouter)
