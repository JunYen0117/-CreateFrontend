import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useCart } from '../../utils/useCart';
import { useLogin } from '../../utils/useLogin';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import Swal from 'sweetalert2';
import { productGetDetail } from '../../utils/api';
import {
  BsPlusLg,
  BsDashLg,
  BsFillCartPlusFill,
  BsHeart,
  BsHeartFill,
} from 'react-icons/bs';
import { FaStar, FaRegStar } from 'react-icons/fa';

function ProductDetail() {
  // 消費者
  const { user } = useLogin();
  // 收藏
  const [heart, setHeart] = useState(false);
  // 評論
  const [comment, setComment] = useState([]);
  // 購物車
  const { addItem, isInCart } = useCart();
  // 計算購買數量
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  // 商品明細
  const [productInDetail, setProductInDetail] = useState({
    id: 0,
    product_name: '',
    price: 0,
    image: '1_1咖啡壺.jpg',
    vendor_id: 0,
    business_name: '',
    product_intro: '',
    product_info: '',
  });

  // /products?productId=2
  const location = useLocation();
  // 根據 URL 建立 Params 物件
  const searchParams = new URLSearchParams(location.search);
  // 取得 Param: productId
  const productId = searchParams.get('productId');
  // 前往結帳
  const goPath = useHistory();

  useEffect(() => {
    setHeart(false);
  }, [user.userID]);

  // 商品明細
  useEffect(() => {
    let axiosProductById = async () => {
      const response = await productGetDetail(productId);
      setProductInDetail(response.data[0]);
    };
    axiosProductById();
  }, []);

  // 確認收藏
  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(
        `${API_URL}/fav/product/check/${user.userID}/${productId}`
      );
      console.log('like', response.data);
      if (response.data.length === 0) {
        setHeart(false);
      } else {
        setHeart(true);
      }
    };
    if (!user.userID) return;
    getUserLike();
  }, [user.userID]);

  // 商品評論
  useEffect(() => {
    let getProductComment = async () => {
      let response = await axios.get(`${API_URL}/comment/product/${productId}`);
      setComment(response.data);
    };
    getProductComment();
  }, []);

  // 產生星星
  const getStars = (starCount) => {
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<FaStar key={i} className="comment_star" />);
    }
    return stars;
  };

  const delfav = async (e) => {
    // console.log(productInDetail.id);
    // console.log(`${API_URL}/fav/product/del/${user_id}/${productInDetail.id}`);
    try {
      let response = await axios.get(
        `${API_URL}/fav/product/del/${user.userID}/${productInDetail.id}`
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '已取消收藏',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addfav = async (e) => {
    // console.log(productInDetail.id);
    // console.log(`${API_URL}/fav/product/add/${user_id}/${productInDetail.id}`);
    try {
      if (!user.userID) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '請先登入',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else {
        let response = await axios.get(
          `${API_URL}/fav/product/add/${user.userID}/${productInDetail.id}`
        );
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '已加入收藏',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddCart = (e) => {
    e.preventDefault();
    const item = {
      id: productInDetail.id,
      product_name: productInDetail.product_name,
      price: productInDetail.price,
      image: productInDetail.image,
      vendor_id: productInDetail.vendor_id,
      business_name: productInDetail.business_name,
      quantity: purchaseQuantity,
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex p-2 p-md-4">
            <figure className="product_detail_main_pic">
              <img
                src={`http://localhost:3003/images/product/${productInDetail.image}`}
                alt=""
              />
            </figure>
          </div>
          {/* 商品描述 */}
          <div className="col-md-6 col-lg-5 col-xl-4 p-2 p-md-4 product_description d-flex flex-column ">
            <p className="h1 m-0 p-3 my-md-4">{productInDetail.product_name}</p>
            <div className="h2 m-0 p-3">
              <span className="price">NT $ {productInDetail.price}</span>
            </div>
            <div className="d-flex mb-md-4">
              <p className="me-3 p-3 align-self-center">數量</p>
              <div className="me-3 p-3 product_count align-self-center">
                <span
                  className="fw-bolder cursor_pointer"
                  onClick={() => {
                    setPurchaseQuantity(
                      purchaseQuantity === 1 ? 1 : purchaseQuantity - 1
                    );
                  }}
                >
                  <BsDashLg />
                </span>
                <span className="border mx-3 h2 fw-bolder">
                  {purchaseQuantity}
                </span>
                <span
                  className="fw-bolder cursor_pointer"
                  onClick={() => {
                    setPurchaseQuantity(purchaseQuantity + 1);
                  }}
                >
                  <BsPlusLg />
                </span>
              </div>
            </div>
            <a href="#/" alt="" onClick={handleAddCart}>
              <div className="mb-md-5 p-2 h2 product_pluscart text-center">
                <BsFillCartPlusFill className="mb-1 me-3 h1" />
                <span>
                  {isInCart(productInDetail.id) ? '立即結帳' : '加入購物車'}
                </span>
              </div>
            </a>
            <a
              href="#/"
              alt=""
              onClick={(e) => {
                if (heart === true) {
                  // console.log('del');
                  delfav(e);
                } else {
                  addfav(e);
                  // console.log('add');
                }
                if (!user.userID) {
                  return
                } else {
                  setHeart(!heart);
                }
              }}
            >
              <div className="mb-md-5 p-2 h2 product_pluscart text-center">
                {heart ? (
                  <BsHeartFill className="mb-1 me-3 h1" />
                ) : (
                  <BsHeart className="mb-1 me-3 h1" />
                )}
                <span>收藏商品</span>
              </div>
            </a>
          </div>
        </div>
        {/* 商品介紹 */}
        <div className="row justify-content-start">
          <div className="col-md-9 px-5 py-3">
            <h1 className="fw-bolder">商品介紹</h1>
            <pre className="h2">{productInDetail.product_intro}</pre>
          </div>
        </div>
        {/* 商品資訊 */}
        <div className="row justify-content-start">
          <div className="col-md-9 px-5 py-3">
            <h1 className="fw-bolder">商品資訊</h1>
            <pre className="h2">{productInDetail.product_info}</pre>
          </div>
        </div>

        {/* 購買評價 */}
        <div className="row justify-content-start my-3">
          <div className="col-12 p-3 px-md-5">
            <h1 className="fw-bolder">購買評價</h1>
            {comment.map((v, i) => {
              return (
                <div key={i} className="productdetail_whole_card my-4">
                  <div className="productdetail_user_info d-flex">
                    <figure className=" me-md-3 my-1">
                      <img
                        src={`http://localhost:3003/images${v.avatar}`}
                        alt=""
                      ></img>
                    </figure>
                    <div className="name_area h2 mx-md-3 p-1">
                      {v.member_name}
                    </div>
                    <div className="star_area mx-md-3 p-1">
                      {getStars(v.star)}
                    </div>
                  </div>
                  <div className="productdetail_card mb-3 row g-0">
                    <div className="productdetail_card_content col-12 col-md-8 p-3">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <p className="user_comment h2">{v.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* --------- 購買評價 --------- */}
      </div>
    </>
  );
}

export default ProductDetail;
