import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { id, image, product_name, business_name, price, on_phone } = props;
  return (
    <>
      <div className={`card front_card ${on_phone ? 'col' : 'col-3'}`}>
        <Link
          to={`/product/detail?productId=${id}`}
          className="ratio ratio-1x1"
        >
          <img
            src={'http://localhost:3003/images/product/' + image}
            className="card-img-top ratio ratio-1x1"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
          <a href="/" className="card-text">
            {business_name}
          </a>
          <p className="money">NT. {price}</p>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
