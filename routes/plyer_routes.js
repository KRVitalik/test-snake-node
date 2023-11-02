import { Router } from "express";

const router = new Router();

import plyerController from '../controller/plyer_controller.js'

router.post('/user', plyerController.createPlyer)
router.get('/user', plyerController.getPlyer)


export default router