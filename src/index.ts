import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})
