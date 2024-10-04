import { AxiosAdapter } from "./http/axios.adapter";

export const RibesAPPSFetcher = new AxiosAdapter({
    baseUrl: import.meta.env.VITE_API,
  
})