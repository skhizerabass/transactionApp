import {
    LOGIN_SUCCESS,
    LOGOUT,
    ON_BOARDING,
    PLAID_SAVE,
    SIGNUP_SAVE
} from 'src/redux/actions/user';


const initialState = {
    onboarding: false,
    loading: true
}


export default User = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            const { user } = action;
            return {
                ...state,
                ...user,
                loading: false
            };
        }
        case SIGNUP_SAVE: {
            const { user } = action;
            return {
                ...state,
                ...user,
                loading: false,
                onboarding: true
            };
        }
        case LOGOUT: {
            return {
                onboarding: false,
                loading: false
            }
        }

        case ON_BOARDING: {
            const { flag } = action;
            return {
                ...state,
                onboarding: flag
            }
        }

        case PLAID_SAVE: {
            const { plaidToken } = action;
            return {
                ...state,
                plaidToken
            }
        }

        default: {
            return state;
        }
    }
}
