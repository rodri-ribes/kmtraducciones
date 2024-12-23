import nodemailer from 'nodemailer';
import multer from 'multer';
import { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();


export async function email(req: Request, res: Response) {
    const { name, email, message } = req.body;

    const files = req.files as Express.Multer.File[]; // Asegúrate de que `req.files` sea un arreglo de archivos
    
    if (name && email && message) {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASS as string,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Mapea los archivos a objetos de adjuntos para nodemailer
        const attachments = files?.map((file) => ({
            filename: file.originalname,
            content: file.buffer, // `file.buffer` contiene el archivo en formato de Buffer
            contentType: file.mimetype,
        }));

        transport.sendMail({
            from: '"Ribes Apps" <ribes.apps@gmail.com>',
            to: "maril.karina@gmail.com",
            subject: "Consulta de Servicio",
            attachments,
            html: `
                <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de Servicio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 600px; 
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            margin: 0 auto;
        }
        h1 {
            color: #4A90E2;
        }
        img {
            width: 80px; /* Ajusta el tamaño de la imagen */
            height: 80px; /* Ajusta el tamaño de la imagen */
            margin-left: 15px; /* Espacio entre el texto y la imagen */
            
        }
        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 20px;
        }
        li {
            margin: 15px 0;
            padding: 10px;
            border-radius: 5px;
            background-color: #e3f2fd;
            transition: background-color 0.3s;
        }
        li:hover {
            background-color: #bbdefb;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>KmTraducciones</h1>
        <img src="https://kmtraducciones.vercel.app/images/logo.png" alt="Logo" />
    </div>
    <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Mensaje:</strong> ${message}</li>
    </ul>
    <div class="footer">
        <p>Creado por <a href="https://ribes-apps.vercel.app/" target='_blank' > Ribes-Apps</a>, Transformamos ideas en experiencias.</p>
    </div>
</body>
</html>

`,
        }, (err) => {
            if (err) {
                res.status(400).send({
                    message: "Hubo un error al enviar el correo, contacte por WhatsApp",
                    status: false,
                });
            } else {
                res.status(200).send({
                    message: "Enviado.",
                    status: true,
                });
            }
        });
    } else {
        res.status(400).send({
            message: "Nombre, correo y mensaje son requeridos.",
            status: false,
        });
    }
}