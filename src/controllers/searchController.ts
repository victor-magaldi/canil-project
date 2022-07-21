import { Request, Response } from 'express'

import { Pet } from '../models/pet'
import { createMenuObj } from '../helpers/createMenuObj'

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string

  let list = Pet.getFromName(query)

  res.render('pages/page', {
    menu: createMenuObj(''),
    banner: false,
    titlePage: 'Busca por:' + query,
    list,
  })
}
