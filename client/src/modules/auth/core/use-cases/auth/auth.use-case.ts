import { HttpAdapter } from "../../../../../config/adapters/http/http.adapter";
import { type Response } from "../../entities/response.entity";
import { type UserRegistration } from "../../entities/userRegistration.entity";


export const authUseCase = async (fetcher: HttpAdapter, url: string, body: UserRegistration): Promise<Response> => {

    try {
        const resp = await fetcher.post<Response>(`/${url}`, body);

        return resp

    } catch (error) {
        throw new Error('error logging in');
    }
}