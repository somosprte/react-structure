import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { api } from 'services';
import swal from 'sweetalert';

import { Creators as UsersActions, Types as UsersTypes } from 'store/ducks/users';

function* getUserLoggedRequest() {
  try {
    const url = 'user/v2/inhabitants/me';
    const response = yield call(api.get, url);

    yield put(UsersActions.getUserLoggedSuccess(response.data));
  } catch (error) {
    localStorage.clear();
    yield put(push('/login'));

    yield call(swal, 'Ops, algo deu errado', 'Não foi possível conectar ao seu usuário.', 'error');
    yield put(UsersActions.getUserLoggedFailure());
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_LOGGED_REQUEST, getUserLoggedRequest);
}
