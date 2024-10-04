
//** SI AXIOS DEJA DE FUNCIONAR POR X MOTIVO, SOLO SE CAMBIARA DESDE ESTE ARCHIVO */

import axios, { type AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";


interface Options {
    baseUrl: string;
    params?: Record<string, string>;
}

//**IMPLEMENTAMOS LA CLASE DE HttpAdapter donde accemos a los metodos get, post, etc */

export class AxiosAdapter implements HttpAdapter{


    //**CREAMOS NUESTRA INTANCIA DE AXIOS */
    
    private axiosInstance: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        });
    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            //**EN MENOS DE USAR AXIOS DIRECTAMENTE, CREAMOS LA INSTANCIA */
            
            const {data} = await this.axiosInstance.get<T>(url, options);
       
            return data;
        } catch (error) {
            throw new Error("Error fetching get...");
        }
    }

    async post<T>(url: string, body: any): Promise<T> {
        try {
            //**EN MENOS DE USAR AXIOS DIRECTAMENTE, CREAMOS LA INSTANCIA */
            
            const {data} = await this.axiosInstance.post<T>(url, body);
           
            return data;
        } catch (error) {
            throw new Error("Error fetching get...");
        }
    }
    
}