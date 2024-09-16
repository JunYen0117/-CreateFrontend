import { useEffect } from 'react';
import { productGetAll, productGetCategory } from '../../utils/api';
import ProductItem from './ProductItem';

function ProductList(props) {
  const { products, setProducts } = props;
  const { classificationId, categoryId } = props;
  const { page, setLastPage } = props;
  const { sort } = props;
  const { price } = props;

  // 第一次進入頁面時，顯示全部商品
  // 全部商品換頁；關閉類別顯示全部商品
  useEffect(() => {
    let getProductAll = async () => {
      // http://localhost:3003/api/product?page=1
      let response = await productGetAll({
        params: {
          page: page,
          classificationId: classificationId,
          productSort: sort,
        },
      });
      setProducts(response.data.data);
      setLastPage(response.data.pagination.lastPage);
    };
    if (Number(price.minPrice) === 0 && Number(price.maxPrice) === 0)
      getProductAll();
  }, [page, classificationId, sort]);

  // 選擇商品種類，顯示選擇種類的商品
  useEffect(() => {
    if (categoryId > 0) {
      let getProductCategory = async () => {
        let response = await productGetCategory(categoryId);
        setProducts(response.data);
      };
      getProductCategory();
    }
  }, [categoryId]);

  return (
    <>
      <div className="product_list d-flex flex-wrap justify-content-start w-100 ">
        {products.map((product, i) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
