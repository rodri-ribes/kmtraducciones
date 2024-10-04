import { HttpAdapter } from "../../../../config/adapters/http/http.adapter";
import { Message } from "../entities/message.entity";

export const sendEmailUseCase = async (fetcher: HttpAdapter, body: any): Promise<Message> => {


    try {
        const resp = await fetcher.post<Message>(`/service/email`, body);

        return resp

    } catch (error) {
        throw new Error('error a get cast');
    }
}