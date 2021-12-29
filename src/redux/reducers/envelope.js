import {
    STORE_ENVELOPE
} from 'src/redux/actions/envelope';
import { STORE_ESSENTIALS } from '../actions/envelope';


const initialState = {
    envelopes: [],
    essentials: []
}


export default envelope = (state = initialState, action) => {
    switch (action.type) {
        case STORE_ENVELOPE: {
            const { envelopes } = action;
            return {
                ...state,
                envelopes
            };
        }
        case STORE_ESSENTIALS: {
            const { essentials } = action;
            return {
                ...state,
                essentials
            };
        }
        default: {
            return state;
        }
    }
}
