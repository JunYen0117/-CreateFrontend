import banner from '../../img/products/cart_banner.webp';
import option1 from '../../img/products/option1.jpg';
import option2 from '../../img/products/option2.jpg';
import option3 from '../../img/products/option3.jpg';

import { AiFillCaretRight } from 'react-icons/ai';
import { FcGenericSortingDesc, FcGenericSortingAsc } from 'react-icons/fc';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { productPriceSearch } from '../../utils/api';

import ProductList from '../../components/Products/ProductList';
import ProductSidebar from '../../components/Products/ProductSidebar';
import ProductPagination from '../../components/Products/ProductPagination';

function Products() {
  const [classifications, setClassifications] = useState([]);
  const [categorys, setCategorys] = useState([]);

  // 顯示的商品
  const [products, setProducts] = useState([]);

  // 商品篩選 類別
  const [classificationId, setClassificationId] = useState(-1);

  // 商品篩選 種類
  const [categoryId, setCategoryId] = useState(-1);

  // 分頁
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // 價格排序
  const [sort, setSort] = useState('');

  // 價格搜尋 Form
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  const formMinPrice = useRef(undefined);
  const formMaxPrice = useRef(undefined);

  // 搜尋後換頁
  useEffect(() => {
    let getSearchProduct = async () => {
      let response = await productPriceSearch({
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
        params: {
          page: page,
          minPrice: price.minPrice,
          maxPrice: price.maxPrice,
        },
      });
      setProducts(response.data.data);
      setLastPage(response.data.pagination.lastPage);
    };
    if (!price.minPrice && !price.maxPrice) return;
    getSearchProduct();
  }, [page]);

  function handleChange(e) {
    setPrice({ ...price, [e.target.name]: e.target.value });
  }

  // 價格區間搜尋 form
  async function handleFormSubmit(e) {
    try {
      let response = await productPriceSearch({
        params: {
          minPrice: price.minPrice,
          maxPrice: price.maxPrice,
        },
      });
      setProducts(response.data.data);
      setPage(1);
      setLastPage(response.data.pagination.lastPage);
      // useRef 清空 input
      formMinPrice.current.value = '';
      formMaxPrice.current.value = '';
    } catch (e) {
      console.error(e.response.data);
    }
  }

  return (
    <>
      <div className="mt-4 product_banner">
        <img src={banner} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-between mt-5 mx-auto gy-3">
          <div className="col-12 col-md-4">
            <a href="#/">
              <div className="product_mask">
                <img src={option1} alt="" />
                <p className="product_option_text">節日推薦</p>
                <div className="product_option_mask"></div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="#/">
              <div className="product_mask">
                <img src={option2} alt="" />
                <p className="product_option_text">熱門商品</p>
                <div className="product_option_mask"></div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/Brand">
              <div className="product_mask">
                <img src={option3} alt="" />
                <p className="product_option_text">全部品牌</p>
                <div className="product_option_mask"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-12 col-md-5 p-0">
            <ul className="d-flex justify-content-between">
              {/* 用 form 表單查詢 */}
              <li className="price_filter mt-1">
                <form id="priceForm">
                  <span className="me-3">NT$</span>
                  <input
                    type="text"
                    id="minPrice"
                    name="minPrice"
                    ref={formMinPrice}
                    onChange={handleChange}
                  />
                  <span>－</span>
                  <input
                    type="text"
                    id="maxPrice"
                    name="maxPrice"
                    ref={formMaxPrice}
                    onChange={handleChange}
                  />
                  {/* 搜尋按鈕 */}
                  <button href="#/" alt="" className="product_price_search">
                    <span>
                      <AiFillCaretRight
                        onClick={(e) => {
                          if (
                            formMinPrice.current.value === '' &&
                            formMaxPrice.current.value === ''
                          ) {
                            e.preventDefault();
                            handleFormSubmit();
                          } else {
                            e.preventDefault();
                            handleFormSubmit();
                          }
                        }}
                      />
                    </span>
                  </button>
                </form>
              </li>
              <li className="product_filter">
                {/* 切換 遞增 和 遞減*/}
                <span>價格排序</span>
                <a href="#/" alt="">
                  {sort !== 'ASC' ? (
                    <span>
                      <FcGenericSortingDesc
                        onClick={() => {
                          setSort('ASC');
                        }}
                      />
                    </span>
                  ) : (
                    <span>
                      <FcGenericSortingAsc
                        onClick={() => {
                          setSort('DESC');
                        }}
                      />
                    </span>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 product_area pt-5">
          <div className="product_sidebar_container col-md-3 col-lg-2">
            <ProductSidebar
              classifications={classifications}
              setClassifications={setClassifications}
              categorys={categorys}
              setCategorys={setCategorys}
              classificationId={classificationId}
              setClassificationId={setClassificationId}
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              setPage={setPage}
              setSort={setSort}
              setPrice={setPrice}
            />
          </div>
          <div className="col-12 col-md-9 col-lg-10 p-0">
            <ProductList
              products={products}
              setProducts={setProducts}
              classificationId={classificationId}
              categoryId={categoryId}
              page={page}
              setLastPage={setLastPage}
              sort={sort}
              price={price}
            />
            {categoryId === -1 ? (
              <ProductPagination
                page={page}
                lastPage={lastPage}
                setPage={setPage}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
