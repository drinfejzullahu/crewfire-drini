import { useEffect } from 'react';
import { Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotosAsync } from '../../store/photos/actions';
import Photo from '../../components/photo';
import SearchBar from '../../components/search-bar';
import './styles.css';

export default function Home() {
  const dispatch = useDispatch();
  const { photos = [] } = useSelector((state) => state.photos);
  useEffect(() => {
    dispatch(getPhotosAsync());
  }, []);

  return (
    <div className="home-wrapper">
      <SearchBar />
      <Row justify="center">
        {photos.map((photo) => (
          <Photo key={photo.published + photo.link} data={photo} />
        ))}
      </Row>
    </div>
  );
}
