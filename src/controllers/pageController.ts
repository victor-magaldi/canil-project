import { Request, Response } from 'express'

import { Pet } from '../models/pet'
import { createMenuObj } from '../helpers/createMenuObj'

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render('pages/page', {
    menu: createMenuObj('all'),
    titlePage: 'Todos os animais disponíveis para adoção',
    banner: {
      title: 'Todos os animais',
      backgroundUrl: '/images/allanimals.jpg',
    },
    list,
  })
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')

  res.render('pages/page', {
    menu: createMenuObj('dogs'),
    titlePage: 'Cachorros disponíveis para adoção',
    banner: {
      title: 'Cachorros',
      backgroundUrl: '/images/banner_dog.jpg',
    },
    list,
  })
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
export const petPage = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render('pages/page', {
    menu: createMenuObj('all'),
    titlePage: 'Todos os animais disponíveis para adoção',
    banner: {
      title: 'Todos os animais',
      backgroundUrl: '/images/allanimals.jpg',
    },
    list,
  })
}
