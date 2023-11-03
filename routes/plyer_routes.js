import { Router } from "express";

const router = new Router();

import plyerController from '../controller/plyer_controller.js'

router.post('/user', plyerController.createPlyer)
router.get('/user', plyerController.getPlyer)
router.put('/user/:id', plyerController.updateScore)


export default router
