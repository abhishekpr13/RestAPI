import express from "express";
import * as plancostshare_controllers from '../controllers/plancostshare_controllers.js'

const router = express.Router();


router.route('/').post(plancostshare_controllers.post);


router.route('/:object_Id').get(plancostshare_controllers.get)
                               .put(plancostshare_controllers.put)
                               .delete(plancostshare_controllers.deleteplancost);

export default router;