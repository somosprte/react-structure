import { all } from 'redux-saga/effects';

import sagaAuth from './auth';
import sagaRepositories from './repositories';
import sagaUser from './users';

export default function* rootSaga() {
  return yield all([sagaAuth(), sagaUser(), sagaRepositories()]);
}
