import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

import * as ApiController from '../controllers/ApiController'

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)
router.get('/search', SearchController.search)

router.get('/v1/api/all', ApiController.getAll)
router.get('/v1/api/dogs', ApiController.getDogs)
router.get('/v1/api/cats', ApiController.getCats)
router.get('/v1/api/fishes', ApiController.getFishes)

export { router }
