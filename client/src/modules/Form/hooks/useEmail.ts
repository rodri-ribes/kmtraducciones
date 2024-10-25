import { useMutation } from "@tanstack/react-query";

import { RibesAPPSFetcher } from "../../../config/adapters/ribesApps.adapter";
import { sendEmailUseCase } from "../core/use-cases";

export default function useEmail() {
  
    const mutation = useMutation({
        mutationFn: async (data: FormData) => await sendEmailUseCase(RibesAPPSFetcher, data),
    })
    return mutation

}
