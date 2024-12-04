import { apiPlatform } from "./rest.ts";

export const login = (data: { [key: string]: string }) =>
  apiPlatform.POST(`login`, data);
