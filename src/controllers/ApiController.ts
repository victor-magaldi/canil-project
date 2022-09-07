import { Request, Response } from 'express'

import { Pet } from '../models/pet'
import { createMenuObj } from '../helpers/createMenuObj'

export const getAll = (req: Request, res: Response) => {
  let list = Pet.getAll()
  res.json(list)
}

export const getDogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')

  res.json(list)
}
export const getCats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')

  res.json(list)
}
export const getFishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')

  res.json(list)
}
export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string

  let list = Pet.getFromName(query)

  res.json(list)
}
