import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import repositories from './repositories';
import users from './users';

export default history =>
  combineReducers({
    auth,
    repositories,
    users,
    router: connectRouter(history),
  });
