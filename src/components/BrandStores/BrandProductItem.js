import { Link } from 'react-router-dom';

function Product(props) {
  const { productId, productName, productPrice, image } = props;

  return (
    <>
      <div className="col-2">
        <Link
          to={`/product/detail?productId=${productId}`}
          className="text-decoration-none"
        >
          <div className="ratio ratio-1x1">
            <img
              src={`http://localhost:3003/images/product/${image}`}
              className="card-img-top"
              alt=""
            />
          </div>
          <div className="card-body productinfo">
            <h5 className="card-title">{productName}</h5>
            <p className="money">NT. {productPrice}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Product;
