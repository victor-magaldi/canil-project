import { Request, Response } from 'express'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: {
      all: true,
      dogs: false,
      cats: false,
      fishes: false,
    },
    titlePage: 'Todos os animais disponíveis para adoção',
    banner: {
      title: 'Todos os animais',
      backgroundUrl: '/images/allanimals.jpg',
    },
  })
}

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: {
      all: false,
      dogs: true,
      cats: false,
      fishes: false,
    },
    titlePage: 'Cachorros disponíveis para adoção',
    banner: {
      title: 'Cachorros',
      backgroundUrl: '/images/banner_dog.jpg',
    },
  })
}
export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: {
      all: false,
      dogs: false,
      cats: true,
      fishes: false,
    },
    titlePage: 'Gatos disponíveis para adoção',
    banner: {
      title: 'Gatos',
      backgroundUrl: '/images/banner_cat.jpg',
    },
  })
}
export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: {
      all: false,
      dogs: false,
      cats: false,
      fishes: true,
    },
    titlePage: 'peixes disponíveis para adoção',
    banner: {
      title: 'peixes',
      backgroundUrl: '/images/banner_fish.jpg',
    },
  })
}
