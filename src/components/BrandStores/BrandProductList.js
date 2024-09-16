import React from 'react';
import BrandProductItem from './BrandProductItem';

function Products(props) {
  const { brand } = props;

  return (
    <>
      <div className="container">
        <div className="row gy-4">
          {brand.map((v, i) => {
            return (
              <BrandProductItem
                key={i}
                productId={v.productId}
                productName={v.product_name}
                productPrice={v.price}
                image={v.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
