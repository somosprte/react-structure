import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api } from '~/services';

import { Creators as UsersActions, Types as UsersTypes } from '~/store/ducks/users';

function* getUserLoggedRequest() {
  try {
    const url = 'user/v2/inhabitants/me';
    const response = yield call(api.get, url);

    yield put(UsersActions.getUserLoggedSuccess(response.data));
  } catch (error) {
    localStorage.clear();
    yield put(push('/login'));
    yield put(UsersActions.getUserLoggedFailure());
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_LOGGED_REQUEST, getUserLoggedRequest);
}
