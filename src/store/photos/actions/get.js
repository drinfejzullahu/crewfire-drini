import axios from 'axios';
import { GET_PHOTOS } from '../actionTypes';

const getPhotos = (photos) => {
  return {
    type: GET_PHOTOS,
    photos,
  };
};

export const getPhotosAsync = (tags = '') => {
  return async (dispatch) => {
    try {
      let url = 'http://localhost:3001/api/photos';
      if (tags !== '') url = `${url}?tags=${tags}`;
      const response = await axios.get(url);
      dispatch(getPhotos(JSON.parse(response.data)));
    } catch (err) {
      console.log(err);
    }
  };
};
