export const Types = {
  GET_REPOSITORIES_REQUEST: 'repositories/GET_REPOSITORIES_REQUEST',
  GET_REPOSITORIES_SUCCESS: 'repositories/GET_REPOSITORIES_SUCCESS',
  GET_REPOSITORIES_FAILURE: 'repositories/GET_REPOSITORIES_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
};

export default function repositories(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case Types.GET_REPOSITORIES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  getRepositoriesRequest: user => ({
    type: Types.GET_REPOSITORIES_REQUEST,
    payload: { user },
  }),

  getRepositoriesSuccess: data => ({
    type: Types.GET_REPOSITORIES_SUCCESS,
    payload: { data },
  }),

  getRepositoriesFailure: () => ({
    type: Types.GET_REPOSITORIES_FAILURE,
  }),
};
