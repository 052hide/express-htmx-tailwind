import express from 'express'

export const TopRouter = express.Router()

TopRouter.get('/', (_req, res) => {
  res.render('pages/index')
})
