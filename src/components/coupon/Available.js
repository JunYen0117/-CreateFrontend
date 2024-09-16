// 可領取優惠券
import React from 'react';
import Common from './Common';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';

function Available(props) {
  const { updateCoupon, setUpdateCoupon } = props;

  // 撈出使用者全部可領取的優惠券 (coupon_send_status=1)
  const [availableList, setAvailable] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const { user } = useLogin();

  let getCoupons = async () => {
    let response = await axios.get(
      API_URL + `/coupons/available/${user.userID}`,
      {
        params: {
          page: nowPage,
        },
      }
    );
    setAvailable(response.data.availableList);
    setLastPage(response.data.pagination.lastPage);
  };
  // console.log('available-LastPage', lastPage);
  useEffect(() => {
    if (!user.userID) return;
    getCoupons();
  }, [user.userID, nowPage, lastPage, updateCoupon]);
  // console.log('available-LastPage', lastPage);
  // console.log(availableList);

  // 以下是優惠券的畫面
  const couponPromptScript = () => {
    if (availableList.length === 0) {
      // console.log('invalidList.length:', availableList.length);
      return <>沒有可領取的優惠券</>;
    } else {
      // console.log('invalidList.length:', availableList.length);
      return <>可領取的優惠券</>;
    }
  };

  const couponPrompt = () => {
    return (
      <>
        {/* <div className="coupon_pass_desktop text-center py-2 position-absolute">
          可領取
        </div> */}
      </>
    );
  };
  const couponUseBtn = () => {
    return (
      <>
        <div className="coupon_desktop text-decoration-none">
          <h3 className="coupon_p my-1">立即領取</h3>
        </div>
        <div className="coupon_phone d-md-none text-decoration-none">
          <h3 className="coupon_p my-auto">可領取</h3>
        </div>
      </>
    );
  };
  return (
    <Common
      pass={couponPrompt()}
      use={couponUseBtn()}
      prompt={couponPromptScript()}
      data={availableList}
      page={lastPage}
      setNowPage={setNowPage}
      notUse={false}
      setUpdateCoupon={setUpdateCoupon}
      updateCoupon={updateCoupon}
    />
  );
}

export default Available;
