import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '~/services';

import { Creators as RepositoriesActions, Types as RepositoriesTypes } from '~/store/ducks/repositories';

export function* getRepositoriesRequest(action) {
  try {
    const url = `users/${action.payload.user}/repos`;
    const response = yield call(api.get, url);

    yield put(RepositoriesActions.getRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.getRepositoriesFailure());
  }
}

export default function* saga() {
  yield takeLatest(RepositoriesTypes.GET_REPOSITORIES_REQUEST, getRepositoriesRequest);
}
