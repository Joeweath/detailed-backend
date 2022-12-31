import { Router } from "express";
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

router.get('/', todosCtrl.index)
router.get('/:id', todosCtrl.show)

router.post('/', todosCtrl.create)

router.put('/:id', todosCtrl.update)

router.delete('/:id', todosCtrl.delete)





export {
    router
}