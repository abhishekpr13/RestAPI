import express from "express";
import * as linkedser_controllers from '../controllers/linkedser_controllers.js'

const router = express.Router();


router.route('/').post(linkedser_controllers.post);


router.route('/:object_Id').get(linkedser_controllers.get)
                               .put(linkedser_controllers.put)
                               .delete(linkedser_controllers.deletelinkedservice);

export default router;