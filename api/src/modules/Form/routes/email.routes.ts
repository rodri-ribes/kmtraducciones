import {Router} from 'express'

import { email } from '../controllers/email.controllers';

const emailRoutes = Router();

emailRoutes.post('/email', email);

export {
    emailRoutes
}


