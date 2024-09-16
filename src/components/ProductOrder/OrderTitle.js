import React from 'react';

const OrderTitle = () => {
  return (
    <>
      <h1>我的訂單</h1>
      <div className="border-bottom w-75 my-3">
        <a href="#/" className="me-5">
          已完成
        </a>
        <a href="#/">已取消</a>
      </div>
    </>
  );
};

export default OrderTitle;
