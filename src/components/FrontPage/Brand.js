import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Brand(props) {
  return (
    <Card className={`front_card ${props.on_phone ? 'col' : 'col-3'}`}>
      <Link to={`/BrandStores?BrandId=${props.id}`} className="ratio ratio-1x1">
        <Card.Img
          src={`http://localhost:3003/images/brand/${props.logo}`}
          className="card-img-top ratio ratio-1x1"
        />
      </Link>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center front_brand_name">
          <a href="/">{props.business_name}</a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Brand;
