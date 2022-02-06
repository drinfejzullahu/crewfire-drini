import { Row, Input, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { getPhotosAsync } from '../../store/photos/actions';
import './styles.css';
const { Search } = Input;

export default function SearchBar() {
  const dispatch = useDispatch();
  const handleSearch = (value) => {
    dispatch(getPhotosAsync(value));
  };

  return (
    <Row justify="center" className="search-bar-wrapper">
      <Col xs={14} sm={14} md={6} lg={6}>
        <Search
          size="large"
          onSearch={handleSearch}
          placeholder="Search by tag"
        />
      </Col>
    </Row>
  );
}
