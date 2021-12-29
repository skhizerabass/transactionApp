import apis from "../../services/apis";
import {
  all,
  call,
  fork,
  put,
  take
} from "redux-saga/effects";
import {
  ALL_TRANSACTIONS,
  CREATE_TRANSACTION,
  CREATE_FEEDBACK,
  GET_LOCATIONS,
  GET_TRANSACTIONS_BY_ID,
  CHANGE_TRANSACTION
} from "../actions/transactions";
import {
  saveTransactions,
  savePlaces
} from "../actions/transactions";
import values from "../../constants/values";

export function* fetchTransactions({
  payload
}) {
  const {
    id,
    envelope,
    success,
    failure
  } = payload;
  try {
    let { data } = yield call(apis.getTransactions, id, envelope);
    // console.log('TEANSACTIONS', JSON.stringify(data.Transactions));
    yield put(saveTransactions(data.Transactions))
    success && success();
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}


export function* addTransaction({
  payload
}) {
  const {
    merchant,
    envelope,
    amount,
    date,
    success,
    failure
  } = payload;
  try {
    let { data } = yield call(apis.createTransactions, { merchant, envelope, amount, date });
    // console.log('TEANSACTIONS', data);
    // yield put(saveTransactions(data.Transactions))
    success && success();
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}


export function* watchTransactions() {
  while (true) {
    const action = yield take(ALL_TRANSACTIONS);
    yield* fetchTransactions(action);
  }
}



export function* watchCreateTransaction() {
  while (true) {
    const action = yield take(CREATE_TRANSACTION);
    yield* addTransaction(action);
  }
}


export function* callFeedback({
  payload
}) {
  const {
    feedback,
    success,
    failure
  } = payload;
  try {
    let { data } = yield call(apis.setFeedBack, { message: feedback });
    console.log('FEEDBACK', data);
    // yield put(saveTransactions(data.Transactions))
    success && success();
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}



export function* watchCreateFeedBack() {
  while (true) {
    const action = yield take(CREATE_FEEDBACK);
    yield* callFeedback(action);
  }
}

export function* fetchLocations({
  payload
}) {
  const {
    lat,
    long,
    success,
    failure
  } = payload;
  try {
    let placesData = [];
    const promises = [];
    Object.keys(values.IMAGES).forEach(value => {

      promises.push(call(apis.getPlaces,
        long,
        lat,
        value
      ));
    });

    let tickersData = yield all(promises);
    tickersData.map(({ data }) => {
      console.log(data.results);
      placesData = [...placesData, ...data.results]
    })

    // console.log('LOCATIONSS', placesData);
    yield put(savePlaces(placesData))
    success && success();
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}

export function* getTransacByEnvelopeID({ payload }) {
  const {
    id,
    success,
    failure
  } = payload;
  try {
    let { data } = yield call(apis.getTransactionsByEnvelope, id);

    success && success(data);
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}


export function* changeTransaction({ payload }) {
  const {
    id,
    envID,
    miscID,
    success,
    failure
  } = payload;
  try {
    let dataShift = (yield call(apis.shiftTransactions, id, envID)).data;
    console.log("DATA", dataShift);
    let { data } = yield call(apis.getTransactionsByEnvelope, miscID);

    success && success(data);
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}

export function* watchGetLocations() {
  while (true) {
    const action = yield take(GET_LOCATIONS);
    yield* fetchLocations(action);
  }
}

export function* watchEnvelopeByID() {
  while (true) {
    const action = yield take(GET_TRANSACTIONS_BY_ID);
    yield* getTransacByEnvelopeID(action);
  }
}


export function* watchTransactionChange() {
  while (true) {
    const action = yield take(CHANGE_TRANSACTION);
    yield* changeTransaction(action);
  }
}


export default function* () {
  yield all([
    fork(watchTransactions),
    fork(watchCreateTransaction),
    fork(watchCreateFeedBack),
    fork(watchGetLocations),
    fork(watchEnvelopeByID),
    fork(watchTransactionChange)

    // fork(watchAuthToken),
    // fork(watchUser),
  ]);
}
