import { useMutation } from "@tanstack/react-query";

import { RibesAPPSFetcher } from "../../../config/adapters/ribesApps.adapter";
import { sendEmailUseCase } from "../core/use-cases";
import { Email } from "../core/entities";

export default function useEmail() {
  
    const mutation = useMutation({
        mutationFn: async (data: Email) => await sendEmailUseCase(RibesAPPSFetcher, data),
    })
    return mutation

}
