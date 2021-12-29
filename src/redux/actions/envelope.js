import { createAction } from "redux-actions";

export const CREATE_ENVELOPE = 'ENVELOPE/CREATE';
export const STORE_ENVELOPE = 'ENVELOPE/STORE';
export const STORE_ESSENTIALS = 'ESSENTIALS/STORE';
export const UPDATE_ENVELOPE = 'ENVELOPE/UPDATE';
export const CREATE_ESSENTIALS = 'ENVELOPE/ESSENTIALS';

export const storeEssentials = (essentials) => ({
    type: STORE_ESSENTIALS,
    essentials
});

export const storeEnvelope = (envelopes) => ({
    type: STORE_ENVELOPE,
    envelopes
});

export const actionCreators = {
    createEnvelope: createAction(CREATE_ENVELOPE),
    updateEnvelope: createAction(UPDATE_ENVELOPE),
    createEssentials: createAction(CREATE_ESSENTIALS)
};
