import { AxiosResponse, Method } from "axios";
import api from "./axios";
import { ENDPOINT } from "./endpoint";

export default function callApi(
  endpoint: string,
  method: Method,
  data: Record<string, unknown> | null = null,
): Promise<void | AxiosResponse> {
  return api({
    method: method,
    url: `${ENDPOINT}/${endpoint}`,
    data: data,
  }).catch((err) => {
    console.log(err);
  });
}
