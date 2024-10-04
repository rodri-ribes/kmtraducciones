import nodemailer from 'nodemailer'
import {type Request, type Response } from 'express';

import dotenv from "dotenv";

dotenv.config();

export function email(req: Request, res: Response){

    const { 
        name,
        email,
        message,
    } = req.body;

    if(name && email && message) {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASS as string
            },
            tls: {
                rejectUnauthorized: false
              }
        })
    
        transport.sendMail({
            from: '"Ribes Apps" <ribes.apps@gmail.com>',
            to: "info.kmtraducciones@gmail.com",
            subject: "Consulta de Servicio",
            html: `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Consulta de Servicio</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400&display=swap" rel="stylesheet">
                    <style>
                        header font{
                            font-family: 'Kalam', sans-serif;
                            text-align: center;
                        }
                        ul {
                            list-style: none;
                        }
                        ul li {
                            font-family: 'Nunito', sans-serif;
                            font-size: 1rem;
                        }
                        ul img {
                            width: 200px;
                            height: 200px;
                        }
                    </style>
                </head>
                <body>
                    <header>
                        <h1>KmTraducciones</h1>
                        <ul>
                            <li>Nombre: ${name}</li>
                        </ul>
                        <ul>
                            <li>Email: ${email}</li>
                        </ul>
                        <ul>
                            <li>Mensaje: ${message}</li>
                        </ul>
                    </div>
                </body>
        </html>`
        }, (err) => {
            if(err){
                
                res.status(400).send({
                    message: "Hubo un error al enviar el correo, contacte por WhatsApp",
                    status: false
                })
            }else{
                res.status(200).send({
                    message: "Enviado.",
                    status: true
                })
            }
        })

    }
}