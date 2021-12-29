import {
    SAVE_TRANSACTION,
    SAVE_PLACES
} from 'src/redux/actions/transactions';


const initialState = {
    all: [],
    places: []
}


export default transaction = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TRANSACTION: {
            const { all } = action;
            return {
                ...state,
                all
            };
        }
        case SAVE_PLACES: {
            const { all } = action;
            return {
                ...state,
                places: all
            };
        }
        default: {
            return state;
        }
    }
}
