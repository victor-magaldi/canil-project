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
export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')

  res.render('pages/page', {
    menu: createMenuObj('cats'),
    titlePage: 'Gatos disponíveis para adoção',
    banner: {
      title: 'Gatos',
      backgroundUrl: '/images/banner_cat.jpg',
    },
    list,
  })
}
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')

  res.render('pages/page', {
    menu: createMenuObj('fishes'),
    titlePage: 'peixes disponíveis para adoção',
    banner: {
      title: 'peixes',
      backgroundUrl: '/images/banner_fish.jpg',
    },
    list,
  })
}
