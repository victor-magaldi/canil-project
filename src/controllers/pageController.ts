import { Request, Response } from 'express'

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        titlePage: 'Todos os animais disponíveis para adoção',
        banner: {
            title: 'Todos os animais',
            backgroundUrl: '/images/allanimals.jpg',
        },
    })
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        titlePage: 'Cachorros disponíveis para adoção',
        banner: {
            title: 'Cachorros',
            backgroundUrl: '/images/banner_dog.jpg',
        },
    })
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        titlePage: 'Gatos disponíveis para adoção',
        banner: {
            title: 'Gatos',
            backgroundUrl: '/images/banner_cat.jpg',
        },
    })
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        titlePage: 'peixes disponíveis para adoção',
        banner: {
            title: 'peixes',
            backgroundUrl: '/images/banner_fish.jpg',
        },
    })
}
