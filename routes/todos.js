import { Router } from "express";
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

router.get('/', todosCtrl.index)

router.post('/', todosCtrl.create)



export {
    router
}