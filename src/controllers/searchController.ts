import { Request, Response } from 'express'

import { Pet } from '../models/pet'
import { createMenuObj } from '../helpers/createMenuObj'

export const search = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj(''),
    banner: false,
    titlePage: 'Página não econtrada',
    list: [],
  })
}
