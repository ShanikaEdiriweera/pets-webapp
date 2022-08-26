import * as types from './constants';
import initialState from './initialState';

export default function petReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PETS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.FETCH_PETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        error: '',
        data: action.payload
      };

    case types.FETCH_PETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: action.payload
      };

    default:
      return state;
  }
}
