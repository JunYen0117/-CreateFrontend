import { useEffect } from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';

function ProductList(props) {
  const { products, setProducts } = props;
  const { classificationId, categoryId } = props;

  // 第一次進入頁面時，顯示全部商品
  useEffect(() => {
    let getProductAll = async () => {
      let response = await axios.get(`http://localhost:3003/api/product/`, {
        withCredentials: true,
      });
      setProducts(response.data);
    };
    getProductAll();
  }, []);

  // 選擇商品類別，顯示那一類商品
  useEffect(() => {
    if (classificationId > 0) {
      let getProductClass = async () => {
        let response = await axios.get(
          `http://localhost:3003/api/product/classification/${classificationId}`,
          {
            withCredentials: true,
          }
        );
        setProducts(response.data);
      };
      getProductClass();
    }
  }, [classificationId]);

  // 選擇商品種類，顯示選擇種類的商品
  useEffect(() => {
    if (categoryId > 0) {
      let getProductCategory = async () => {
        let response = await axios.get(
          `http://localhost:3003/api/product/category/${categoryId}`,
          {
            withCredentials: true,
          }
        );
        setProducts(response.data);
      };
      getProductCategory();
    }
  }, [categoryId]);

  return (
    <>
      <div className="row w-100">
        {products.map((product, i) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
