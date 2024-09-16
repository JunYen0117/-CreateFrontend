// 優惠券
// react 元件是一個函式
// 自訂元件的開頭英文要大寫
// 一個檔案寫一個元件

import Sidebar from '../components/Sidebar';

import React from 'react';
import CouponList from '../components/coupon/CouponList';

const Coupon = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-none d-md-flex justify-content-center mt-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <CouponList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
