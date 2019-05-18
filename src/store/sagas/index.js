import { all } from 'redux-saga/effects';

import sagaAuth from 'store/sagas/auth';
import sagaUser from 'store/sagas/users';

export default function* rootSaga() {
  return yield all([sagaAuth(), sagaUser()]);
}
