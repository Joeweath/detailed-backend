import { Router } from "express";
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

router.get('/', todosCtrl.index)
router.get('/:id', todosCtrl.show)

router.post('/', todosCtrl.create)




export {
    router
}