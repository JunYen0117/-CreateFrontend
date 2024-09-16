import { Link } from 'react-router-dom';

function ProductItem(props) {
  const { product } = props;

  return (
    <>
      <div className="product_item m-2">
        <Link
          to={'/product/detail?productId=' + product.id}
          className="to_product_detail d-block"
          alt=""
        >
          <span className="product_item_avatar d-block w-100">
            <img
              src={`http://localhost:3003/images/product/${product.image}`}
              alt=""
            ></img>
          </span>
          <span className="card_title d-block h2 ms-2 mt-2">
            {product.product_name}
          </span>
          <span className="card_brand d-block h3 ms-2">
            品牌：{product.business_name}
          </span>
          <span className="card_price d-block h2 ms-2">
            NT$ {product.price}
          </span>
        </Link>
      </div>
    </>
  );
}

export default ProductItem;
