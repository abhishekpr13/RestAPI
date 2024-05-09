import express from "express";
import * as linkedplanser_controllers from '../controllers/linkedplanser_controllers.js'

const router = express.Router();


router.route('/').post(linkedplanser_controllers.post);


router.route('/:object_Id').get(linkedplanser_controllers.get)
                               .put(linkedplanser_controllers.put)
                               .delete(linkedplanser_controllers.deletelinkedservice);

export default router;