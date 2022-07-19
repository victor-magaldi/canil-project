import { Request, Response } from 'express'

import { createMenuObj } from '../helpers/createMenuObj'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('all'),
    titlePage: 'Todos os animais disponíveis para adoção',
    banner: {
      title: 'Todos os animais',
      backgroundUrl: '/images/allanimals.jpg',
    },
  })
}

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('dogs'),
    titlePage: 'Cachorros disponíveis para adoção',
    banner: {
      title: 'Cachorros',
      backgroundUrl: '/images/banner_dog.jpg',
    },
  })
}
export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('cats'),
    titlePage: 'Gatos disponíveis para adoção',
    banner: {
      title: 'Gatos',
      backgroundUrl: '/images/banner_cat.jpg',
    },
  })
}
export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('fishes'),
    titlePage: 'peixes disponíveis para adoção',
    banner: {
      title: 'peixes',
      backgroundUrl: '/images/banner_fish.jpg',
    },
  })
}
