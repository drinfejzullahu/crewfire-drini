import { Card, Col } from 'antd';
import './styles.css';
const { Meta } = Card;

export default function Photo({
  data: {
    description,
    title,
    author_id,
    author,
    media: { m: link },
  },
}) {
  return (
    <Col xs={20} sm={20} md={10} lg={4} className="photo-wrapper">
      <Card cover={<img className="img-wrapper" alt={author_id} src={link} />}>
        <Meta title={title} description={'Author: ' + author} />
      </Card>
    </Col>
  );
}
