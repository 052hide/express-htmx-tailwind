import express from 'express'
import { nanoid } from 'nanoid'
import Chance from 'chance'

const chance = new Chance()

export const PetsRouter = express.Router()

let pets = [...Array(3)].map((_, i) => {
  const id = nanoid()
  return {
    id,
    name: chance.name(),
  }
})

const addPet = ({ name }: { name: string }) => {
  const id = nanoid()
  pets = [
    ...pets,
    {
      id,
      name,
    },
  ]
}

PetsRouter.get('/', (_req, res) => {
  res.render('pages/pets/index', {
    pets,
  })
})

PetsRouter.get('/create', (_req, res) => {
  res.render('components/features/pet/createForm/index')
})

PetsRouter.post('/', (req, res) => {
  addPet({ name: req.body.name })
  res.render('components/features/pet/petList/index', {
    pets,
  })
})
