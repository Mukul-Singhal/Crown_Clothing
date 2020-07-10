import { UserActiontypes } from "./user-types";

export const setCurrentUser = (user) => ({
  type: UserActiontypes.SET_CURRENT_USER,
  payload: user,
});
