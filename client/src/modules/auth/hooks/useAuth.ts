import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type UserRegistration } from "../core/entities/userRegistration.entity"
import * as UseCases from "../core/use-cases"
import { RibesAPPSFetcher } from "../../../config/adapters/ribesApps.adapter"
import { useNavigate } from "react-router-dom";
import { type Response } from "../core/entities/response.entity";

interface Props {
    url: string;
    body: UserRegistration
}

export const useAuth = () => {
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (data: Props) => await UseCases.authUseCase(RibesAPPSFetcher, data.url, data.body),
        onSuccess: (resp: Response) => {
            window.localStorage.setItem('token', resp.token as string);
            queryClient.setQueryData(['user'], resp.user);
            navigate("/");
        },
        
    })

  return mutation
}
