import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import HeartProduct from './HeartProduct';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../utils/useCart';
import { productGetDetail } from '../../utils/api';

const FavProduct = (props) => {
  const { product } = props;
  const { addItem, isInCart } = useCart();

  // 前往結帳
  const goPath = useHistory();

  // 商品明細
  const [productInDetail, setProductInDetail] = useState({
    id: 0,
    product_name: '',
    price: 0,
    image: '',
    vendor_id: 0,
    business_name: '',
    product_intro: '',
    product_info: '',
  });

  useEffect(() => {
    let axiosProductById = async () => {
      // 向後端要資料
      const response = await productGetDetail(product.product_id);
      setProductInDetail(response.data[0]);
    };
    axiosProductById();
  }, []);
  // console.log('pp',product);

  // console.log('kk',productInDetail);

  const handleAddCart = (e) => {
    e.preventDefault();
    const item = {
      id: productInDetail.id,
      product_name: productInDetail.product_name,
      price: productInDetail.price,
      image: productInDetail.image,
      vendor_id: productInDetail.vendor_id,
      business_name: productInDetail.business_name,
      quantity: 1,
      checked: false,
    };
    if (isInCart(productInDetail.id)) {
      goPath.push('/cart');
    } else {
      addItem(item);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '商品已加入購物車',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="Fp_top me-2 mb-3">
        <img
          className="Fp_img cursor_pointer"
          src={`http://localhost:3003/images/product/${product.image}`}
          alt=""
          onClick={() =>
            goPath.push(`/product/detail?productId=${product.product_id}`)
          }
        />
      </div>
      <div className="Fp_body me-2 mb-5">
        <h3 style={{ height: '40px' }}>{product.product_name}</h3>
        <p>NT$ {product.price}</p>
        <HeartProduct data={product} />
        <button
          style={{ width: '10rem' }}
          variant="primary"
          className="text-white d-block Fp_button p-2 mt-2"
          onClick={handleAddCart}
        >
          <FaShoppingCart className="me-2 h2 m-0 " />
          {isInCart(productInDetail.id) ? '立即結帳' : '加入購物車'}
        </button>
      </div>
    </>
  );
};

export default FavProduct;
