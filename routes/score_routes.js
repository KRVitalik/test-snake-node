import { Router } from "express";

const router = new Router();

import scoreController from '../controller/score_controller.js'

router.put('/user', scoreController.updateScore)