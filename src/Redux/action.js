import * as type from "./actionType";
export const isLoginSuccess = (payload) => {
  return { type: type.IS_LOGIN_Auth, payload: payload };
};
export const userRegistrationPending = (payload) => ({
  type: type.USER_REGISTRATION_PENDING,
  payload,
});
export const userRegistrationReject = (payload) => ({
  type: type.USER_REGISTRATION_REJECT,
  payload,
});
export const userRegistrationSuccess = (payload) => ({
  type: type.USER_REGISTRATION_SUCCESS,
  payload,
});

export const userLoginPending = (payload) => ({
  type: type.USER_LOGIN_PENDING,
  payload,
});
export const userLoginReject = (payload) => ({
  type: type.USER_LOGIN_REJECT,
  payload,
});
export const userLoginSuccess = (payload) => ({
  type: type.USER_LOGIN_SUCCESS,
  payload,
});
