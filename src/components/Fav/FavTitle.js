import React from 'react';

const FavTitle = () => {
  return (
    <>
      <h1>我的收藏</h1>
      <div className="border-bottom w-100 my-3">
        <a href="#/" className="me-5">
          商品
        </a>
        <a href="#/" className="me-5">
          文章
        </a>
        <a href="#/">活動</a>
      </div>
    </>
  );
};

export default FavTitle;
