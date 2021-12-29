import {
  LOGIN,
  SIGNUP,
  PLAID_SAVE
} from "src/redux/actions/user";
import { removeAuthToken } from "src/services/apiInstance";
import apis from "../../services/apis";
import {
  all,
  call,
  fork,
  put,
  take
} from "redux-saga/effects";
import { onError } from "src/utils/error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import values from "../../constants/values";
import {
  LOGOUT,
  logout,
  saveUser,
  UPDATE_DOB,
  saveSignupUser,
  FETCH_PROFILE,
  UPDATE_ACCESS_TOKEN,
  UPDATE_USER,
  UPDATE_BUDGET
} from "../actions/user";
import { setAuthToken } from "../../services/apiInstance";

export function* asyncLogin({ payload }) {
  const {
    username,
    password,
    success,
    failure,
  } = payload;

  try {

    removeAuthToken();

    // console.log(username, password);

    let { data } = yield call(apis.login, username, password);
    const user = JSON.stringify(data);
    yield AsyncStorage.setItem(values.USER, user);
    yield put(saveUser(data));
    // console.log(data);
    // data = data.data;
    // AsyncStorage.setItem("USER", JSON.stringify(data));
    // 
    // yield put({ type: LOGIN_SUCCESS, user: data });

    setAuthToken(`${data.authentication.access}`);

    success && success();
  } catch (error) {
    console.log(error);
    if (error) {
      yield onError(error);
    } else {
      yield onError();

    }
    failure && failure();
  }
}


export function* asyncSignup({ payload }) {
  const {
    name,
    lastName,
    phone,
    username,
    password,
    email,
    success,
    failure,
  } = payload;

  try {

    let { data } = yield call(apis.signup, username, password, name, lastName, phone, email);
    // console.log(data);
    // data = data.data;
    const user = JSON.stringify(data);
    yield AsyncStorage.setItem(values.USER, user);
    yield put(saveSignupUser(data));
    setAuthToken(`${data.authentication.access}`);

    success && success();
  } catch (error) {

    if (error) {
      yield onError(error);
    } else {
      yield onError();
    }
    failure && failure();
  }
}

export function* updateToken({ payload }) {
  const {
    success,
    failure
  } = payload;
  try {
    let user = yield AsyncStorage.getItem(values.USER);
    // console.log("DATA", user);
    if (user) {
      user = JSON.parse(user);
      if (user.authentication) {
        let { data } = yield call(apis.refresh, user.authentication.refresh);
        user.authentication.access = data.access;
        console.log(data);
        yield put(saveUser(user));
        user = JSON.stringify(user);
        setAuthToken(`${data.access}`);

        yield AsyncStorage.setItem(values.USER, user);
      } else {
        yield put(logout())
      }
    } else {
      yield put(logout())
    }
    success && success();
  } catch (err) {
    console.log(err);
    if (err.code === 'token_not_valid') {
      yield put(logout())

    }

    // failure && failure();
  }
}

export function* savePlaidToken({ payload }) {
  const {
    token,
    success,
    failure
  } = payload;

  let user = yield AsyncStorage.getItem(values.USER);
  user = JSON.parse(user);
  try {
    let { data } = yield call(apis.getPlaidToken, user.id, token.publicToken);
    user.plaidToken = token.publicToken;
    user = { ...user, ...data }
    yield AsyncStorage.setItem(values.USER, JSON.stringify(user));
    yield put(saveUser(user));
    success && success();

  } catch (error) {
    // console.log(err)
    if (error) {
      yield onError(error);
    } else {
      yield onError();
    }
    failure && failure();
  }

}

export function* fetchUserProfile({ payload }) {
  const {
    id,
    success,
    failure
  } = payload;
  let user = yield AsyncStorage.getItem(values.USER);
  user = JSON.parse(user);
  try {
    let { data } = yield call(apis.getUserProfile, id);
    // console.log(data);
    // user = { ...user, ...data }
    // yield put(saveUser(user));
    success && success(user);
  } catch (err) {
    console.log(err)
    failure && failure();
  }

}

export function* updateUser({ payload }) {
  const {
    id,
    phone,
    name,
    email,
    success,
    failure
  } = payload;
  let user = yield AsyncStorage.getItem(values.USER);
  user = JSON.parse(user);
  try {
    let { data } = yield call(apis.updateUserInfo, id, { firstName: name, phone });
    // console.log(data);
    user.firstName = name;
    user.email = email;
    yield AsyncStorage.setItem(values.USER, JSON.stringify(user));
    yield put(saveUser(user));
    success && success();
  } catch (err) {
    console.log(err)
    failure && failure();
  }

}


export function* updateDOB({ payload }) {
  const {
    dob,
    success,
    failure
  } = payload;
  let user = yield AsyncStorage.getItem(values.USER);
  user = JSON.parse(user);
  try {
    let { data } = yield call(apis.updateDOBApi, user.id, { dob });

    yield AsyncStorage.setItem(values.USER, JSON.stringify(user));
    yield put(saveUser(user));
    success && success();
  } catch (err) {
    console.log(err)
    failure && failure();
  }

}


export function* updateBudget({ payload }) {
  const {
    budget,
    id,
    success,
    failure
  } = payload;
  try {

    let user = yield AsyncStorage.getItem(values.USER);
    user = JSON.parse(user);
    let { data } = yield call(apis.updatePlaidUser, { budget }, id);
    console.log('PLAID', data);
    user = { ...user, ...data }
    yield AsyncStorage.setItem(values.USER, JSON.stringify(user));
    yield put(saveUser(user));
    success && success();
  } catch (err) {
    console.log(err)
    failure && failure();
  }

}


export function* watchSignUp() {
  while (true) {
    const action = yield take(SIGNUP);
    yield* asyncSignup(action);
  }
}

export function* watchLogin() {
  while (true) {
    const action = yield take(LOGIN);
    yield* asyncLogin(action);
  }
}

export function* watchToken() {
  while (true) {
    const action = yield take(UPDATE_ACCESS_TOKEN);
    yield* updateToken(action);
  }
}

export function* watchLogout() {
  while (true) {
    const action = yield take(LOGOUT);
    removeAuthToken();

    yield* AsyncStorage.clear();
  }
}

export function* watchSavePlaidToken() {
  while (true) {
    const action = yield take(PLAID_SAVE);
    yield* savePlaidToken(action);
  }
}


export function* watchGetUserProfile() {
  while (true) {
    const action = yield take(FETCH_PROFILE);
    yield* fetchUserProfile(action);
  }
}

export function* watchUpdateUser() {
  while (true) {
    const action = yield take(UPDATE_USER);
    yield* updateUser(action);
  }
}

export function* watchUpdateBudget() {
  while (true) {
    const action = yield take(UPDATE_BUDGET);
    yield* updateBudget(action)
  }
}

export function* watchUpdateUserDOB() {
  while (true) {
    const action = yield take(UPDATE_DOB);
    yield* updateDOB(action)
  }
}

export default function* () {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchToken),
    fork(watchLogout),
    fork(watchSavePlaidToken),
    fork(watchGetUserProfile),
    fork(watchUpdateUser),
    fork(watchUpdateUserDOB),
    fork(watchUpdateBudget)
  ]);
}
