import { createAction } from "redux-actions";

export const LOGIN = 'USER/LOGIN';
export const LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS';
export const UPDATE_ACCESS_TOKEN = 'USER/UPDATE_ACCESS_TOKEN';
export const LOGOUT = 'USER/LOGOUT';
export const SIGNUP = 'USER/SIGNUP';
export const SIGNUP_SAVE = 'USER/SIGNUP/SAVE';

export const FORGOT = 'USER/FORGOT';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const ON_BOARDING = 'ON_BOARDING';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_BUDGET = 'UPDATE_BUDGET';
export const PLAID_SAVE = 'PLAID_SAVE';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const SUMMARY = 'SUMMARY';
export const UPDATE_DOB = 'UPDATE_DOB';

export const logout = () => ({
    type: LOGOUT,

});

export const saveUser = (user) => ({
    type: LOGIN_SUCCESS,
    user
});

export const saveSignupUser = (user) => ({
    type: SIGNUP_SAVE,
    user
});

export const setOnboarding = (flag) => ({
    type: ON_BOARDING,
    flag
});

export const actionCreators = {
    login: createAction(LOGIN),
    signup: createAction(SIGNUP),
    logout: createAction(LOGOUT),
    updateBudget: createAction(UPDATE_BUDGET),
    forgot: createAction(FORGOT),
    uploadImage: createAction(UPLOAD_IMAGE),
    updateUser: createAction(UPDATE_USER),
    updateToken: createAction(UPDATE_ACCESS_TOKEN),
    savePlaidToken: createAction(PLAID_SAVE),
    fetchProfile: createAction(FETCH_PROFILE),
    summary: createAction(SUMMARY),
    updateDOB: createAction(UPDATE_DOB)
};
