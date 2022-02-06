const axios = require('axios');

exports.getPhotos = async (req, res, next) => {
  try {
    let url =
      'https://www.flickr.com/services/feeds/photos_public.gne?format=json';
    if (req?.query?.tags) {
      url = `${url}&tags=${req?.query?.tags}`;
    }
    const response = await axios.get(url);
    if (response?.data?.indexOf('[') > -1) {
      res
        .status(200)
        .json(
          response.data.substring(response.data.indexOf('[')).split(']')[0] +
            ']'
        );
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
