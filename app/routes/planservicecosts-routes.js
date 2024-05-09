import express from "express";
import * as planservicecosts_controllers from '../controllers/planservicecosts_controllers.js'

const router = express.Router();


router.route('/').post(planservicecosts_controllers.post);


router.route('/:object_Id').get(planservicecosts_controllers.get)
                               .put(planservicecosts_controllers.put)
                               .delete(planservicecosts_controllers.deleteplanservices);

export default router;