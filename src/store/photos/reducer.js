import { GET_PHOTOS } from './actionTypes';

const initialState = {
  photos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      };
    default:
      return state;
  }
};

export default reducer;
