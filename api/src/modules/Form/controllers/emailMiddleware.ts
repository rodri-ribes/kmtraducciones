import multer from 'multer';

// Configuración de multer
const upload = multer();

// Middleware para manejar archivos adjuntos
export const emailMiddleware = upload.array('file');