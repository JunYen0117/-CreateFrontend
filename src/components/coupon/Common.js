import React from 'react';
import Card from './Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// let data = {};
// let page = '';

function Common(props) {
  const {
    prompt,
    pass,
    use,
    data,
    page, // lastPage
    setNowPage,
    notUse,
    refreshList,
    updateCoupon,
    setUpdateCoupon,
  } = props;

  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons/updateCoupon');
      // console.log(response.data);
    };
    getCoupons();
  }, []);

  const [active, setActive] = useState(1);

  function getPagination() {
    // console.log('getPagination');
    let items = [];
    // console.log('common-page', page);
    for (let number = 1; number <= page; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={(e) => {
            setActive(number);
            setNowPage(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    // console.log('items', items);
    return items;
  }

  // console.log(data);
  // console.log('receiveList', receiveList);

  return (
    <>
      <div className="container_coupon">
        <h4 className="coupon_prompt my-4 ms-1">
          {/* 這是 每筆訂單僅可使用一張優惠券 的變數 */}
          {prompt}
        </h4>
        {/* div不能放在map裡面，因為這樣 d-flex 會一直重複生成，所以要放在外面 */}
        <div className="coupon d-flex d-grid flex-wrap justify-content-between mx-1 row">
          {data.map((coupon, index) => {
            return (
              <Card
                key={index}
                pass={pass}
                use={use}
                coupon={coupon}
                notUse={notUse}
                refreshList={refreshList}
                updateCoupon={updateCoupon}
                setUpdateCoupon={setUpdateCoupon}
              />
            );
          })}
        </div>
      </div>
      <div className="coupon pt-5">
        <Pagination
          size="sm"
          className="justify-content-center coupon_pagination"
        >
          {getPagination()}
        </Pagination>
      </div>
    </>
  );
}

export default Common;
