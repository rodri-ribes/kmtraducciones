import {Router} from 'express'
import { email } from '../controllers/email.controllers';
import multer from 'multer';

const emailRoutes = Router();

const storage = multer.memoryStorage(); // Almacena archivos en memoria (puedes usar `diskStorage` para almacenarlos en disco)

const upload = multer({ storage: storage });

emailRoutes.post('/email', upload.array('files'), email);

export {
    emailRoutes
}


