import { createAction } from "redux-actions";

export const ALL_TRANSACTIONS = 'FETCH_ALL_TRANSACTIONS';
export const SAVE_TRANSACTION = 'SAVE_TRANSACTION';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION'
export const CREATE_FEEDBACK = 'CREATE_FEEDBACK'
export const GET_LOCATIONS = 'GET_LOCATIONS'
export const SAVE_PLACES = 'SAVE_PLACES'
export const GET_TRANSACTIONS_BY_ID = 'GET_TRANSACTIONS_BY_ID';
export const CHANGE_TRANSACTION = "CHANGE_TRANSACTION";

export const saveTransactions = (all) => ({
    type: SAVE_TRANSACTION,
    all
});

export const savePlaces = (all) => ({
    type: SAVE_PLACES,
    all
});

export const actionCreators = {
    fetchTransactions: createAction(ALL_TRANSACTIONS),
    createTransaction: createAction(CREATE_TRANSACTION),
    createFeedBack: createAction(CREATE_FEEDBACK),
    getLocations: createAction(GET_LOCATIONS),
    getTransactions: createAction(GET_TRANSACTIONS_BY_ID),
    changeTransaction: createAction(CHANGE_TRANSACTION)


};
