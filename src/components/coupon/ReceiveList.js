// 可使用的優惠券

import React from 'react';
import Common from './Common';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';
import { Link } from 'react-router-dom';

function ReceiveList(props) {
  // console.log('receiveList', couponList);
  // console.log('receiveLastPage',receiveLastPage)

  const { updateCoupon } = props;

  // 撈出全部使用者可使用的優惠券
  const [receiveLastPage, setReceiveLastPage] = useState();
  const [nowPage, setNowPage] = useState(1);
  const [receiveList, setReceiveList] = useState([]);
  const { user } = useLogin();

  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(
        API_URL + `/coupons/receive/${user.userID}`,
        {
          params: {
            page: nowPage,
          },
        }
      );
      // console.log(response.data);
      setReceiveList(response.data.receiveList);
      setReceiveLastPage(response.data.pagination.receiveLastPage);
    };
    if (!user.userID) return;
    getCoupons();
    // console.log('receiveLastPage', receiveLastPage);
    // console.log('nowReceivePage', nowReceivePage);
  }, [user.userID, nowPage, receiveLastPage, updateCoupon]);
  // console.log('receiveList', receiveList);
  // console.log('receiveLastPage', receiveLastPage);

  // useEffect(() => {
  //   let getCoupons = async () => {
  //     let response = await axios.get(API_URL + '/coupons/receive', {
  //       params: {
  //         page: nowPage,
  //       },
  //     });
  //     console.log(response.data);
  //     setReceiveList(response.data.receiveList);
  //     setReceiveLastPage(response.data.pagination.receiveLastPage);
  //   };
  //   getCoupons();
  // console.log('receiveLastPage', receiveLastPage);
  // console.log('nowReceivePage', nowReceivePage);
  // }, [nowPage, receiveLastPage]);
  // console.log('receiveList', receiveList);
  // console.log('receiveLastPage', receiveLastPage);

  const couponPromptScript = () => {
    return <>每筆訂單僅可使用一張優惠券</>;
  };

  const couponPrompt = () => {
    return (
      <>
        <div className="coupon_pass_desktop text-center py-2 position-absolute">
          即將過期
        </div>
        <div className="coupon_pass_phone position-absolute d-md-none py-2">
          即將過期
        </div>
      </>
    );
  };

  const couponUseBtn = () => {
    return (
      <>
        <div className="coupon_desktop text-decoration-none">
          <Link to="/product">
            <h3 className="coupon_p my-1">立即使用</h3>
          </Link>
        </div>
        <div className="coupon_phone d-md-none text-decoration-none">
          <Link to="/product">
            <h3 className="coupon_p my-auto">立即使用</h3>
          </Link>
        </div>
      </>
    );
  };

  return (
    <Common
      pass={couponPrompt()}
      use={couponUseBtn()}
      prompt={couponPromptScript()}
      data={receiveList}
      page={receiveLastPage}
      setNowPage={setNowPage}
      notUse={true}
    />
  );
}

export default ReceiveList;
