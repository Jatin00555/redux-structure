import { createActionCreators } from "./actionHelper.ts";
import { LOGIN } from "./actionTypes.ts";

export const login = createActionCreators<{ [key: string]: string }, Object>(
  LOGIN
);
