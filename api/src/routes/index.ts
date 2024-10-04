import { Router } from 'express';
import {emailRoutes} from '../modules/Form';

//modules

const router = Router();

router.use('/service', emailRoutes);


export default router;