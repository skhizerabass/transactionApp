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
  CREATE_ENVELOPE,
  UPDATE_ENVELOPE,
  storeEnvelope,
  storeEssentials,
  CREATE_ESSENTIALS
} from "../actions/envelope";
import {
  SUMMARY
} from "../actions/user";
import { saveTransactions } from "../actions/transactions";

export function* saveEnvelope({
  payload
}) {
  const {
    name,
    type,
    percentage,
    category,
    success,
    failure
  } = payload;
  try {
    const templates = [];
    templates.push(category);
    yield call(apis.createEnvelope, {
      name,
      templates,
      max_amount: percentage,
      type
    }, '');
    success && success();
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}

export function* summary(
  payload
) {
  yield all([
    getEnvelope(payload),
    // getEssentials(payload)
  ])
}

export function* getEnvelope({
  payload
}) {
  const { id } = payload;
  try {
    const { data } = yield call(apis.getUserEnvelopes, id);
    yield put(storeEnvelope(data.envelopes));
  }
  catch (err) {
    console.log(err);
    // failure && failure()
  }
}


export function* getEssentials({
  payload
}) {
  const { id } = payload;
  try {
    const { data } = yield call(apis.getUserEssentials, id);
    console.log(data);
    yield put(storeEssentials(data.essentials));
  }
  catch (err) {
    console.log(err);
    // failure && failure()
  }
}


export function* updateEnvelope({
  payload
}) {
  const { id, amount, success, failure } = payload;
  try {
    const { data } = yield call(apis.updateEnvelope, { maxAmount: amount }, id);

    console.log(data);
    success();
    // yield put(storeEssentials(data.essentials));
  }
  catch (err) {
    console.log(err);

    failure && failure()
  }
}

export function* watchEnvelope() {
  while (true) {
    const action = yield take(CREATE_ENVELOPE);
    yield* saveEnvelope(action);
  }
}

export function* watchSummary() {
  while (true) {
    const action =
      yield take(SUMMARY);
    yield* summary(action);

  }
}

export function* watchEnvelopeUpdate() {
  while (true) {
    const action =
      yield take(UPDATE_ENVELOPE);
    yield* updateEnvelope(action);

  }
}



export function* createEnvelopeEssentials({
  payload
}) {
  const { envelopes, success, failure } = payload;
  try {
    const { data } = yield call(apis.createEnvelopes, envelopes);
    console.log(data);
    success();
  }
  catch (err) {
    console.log(err);
    failure && failure()
  }
}

export function* watchCreateEssentials() {
  while (true) {
    const action =
      yield take(CREATE_ESSENTIALS);
    yield* createEnvelopeEssentials(action);

  }
}

export default function* () {
  yield all([
    fork(watchEnvelope),
    fork(watchSummary),
    fork(watchEnvelopeUpdate),
    fork(watchCreateEssentials)
    // fork(watchAuthToken),
    // fork(watchUser),
  ]);
}
