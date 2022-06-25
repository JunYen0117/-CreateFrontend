import { Modal } from 'antd';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const Detail = (props) => {
  const { setOrderDetailId } = props;
  const { orderId } = props;
  console.log('orderId', orderId);
  // 刪除按鈕
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);

  useEffect(() => {
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/productorder/${orderId}`);
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
    };
    getDetail();
  }, []);

  const handleCancel = async () => {
    // console.log('click');
    // console.log(`/productorder/${orderId}/1`);
    let [result] = await axios.get(API_URL + `/productorder/${orderId}/1`);
  }
  return (
    <>
      {/* 訂單列表 */}

      {/* 沒有訂單 */}
      {/* <div>
        <img src={require('../image/Singing.png')} className="img1" alt="" />
        <h3>您沒有尚未付款的訂單</h3>
      </div> */}

      {/* ===================================== */}

      {/* 訂單明細 */}
      <div className="orderlist-card w-100 ">
        <div className="w-100 mt-3">
          <table className="detail-table w-100 ms-2">
            <thead className="text-center w-100">
              <tr>
                <th>品牌</th>
                <th>商品編號</th>
                <th>商品資訊</th>
                <th>定價</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {detail.map((v) => {
                return (
                  <tr key={`detail-${v.id}`}>
                    <td className="pt-3">{v.business_name}</td>
                    <td className="pt-3">{v.product_num}</td>
                    <td className="pt-3">{v.product_name}</td>
                    <td className="pt-3">{v.price}</td>
                    <td className="pt-3">{v.amount}</td>
                    <td className="pt-3">{v.subtotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <hr />

          <div className="d-flex justify-content-end ">
            <table className="ol_tabledown text-end w-25">
              <tbody>
                <tr>
                  <td></td>
                  <td>NT${detailtotal}</td>
                </tr>
                <tr className=" border-bottom">
                  <td>運費</td>
                  <td>NT$ 120</td>
                </tr>
                <tr className="text-danger">
                  <td>優惠券折抵</td>
                  <td>- NT $100</td>
                </tr>
                <tr>
                  <td>總金額</td>
                  <td className="ol_f">NT$ 2100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 
      <div className="orderlist-card w-100">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">優惠折抵明細</div>
        </div>
        <div className="card-content">
          <div className="row mt-3">
            <p className="ol_p col-lg-6">單筆消費滿NT$ 2000享免運</p>
            <p className="ol_p1 text-info col-lg-6 text-end">NT$ -120</p>
          </div>
        </div>
      </div> */}

      <div className="orderlist-card w-100 ">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">付款人資訊</div>
        </div>
        <div className="card-content ">
          <table className="ol_table">
            <tbody>
              <tr>
                <td>收件人</td>
                <td>小雞蛋</td>
              </tr>
              <tr>
                <td>收件人地址</td>
                <td>789 天堂路</td>
              </tr>
              <tr>
                <td>收件人電話</td>
                <td>0931266789</td>
              </tr>
              <tr>
                <td>運送方式</td>
                <td>宅配</td>
              </tr>
              <tr>
                <td>備註</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="orderlist-card w-100 ">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">付款資訊</div>
        </div>
        <div className="card-content ">
          <table className="ol_table">
            <tbody>
              <tr>
                <td>付款方式</td>
                <td>線上信用卡付款</td>
              </tr>
              <tr>
                <td>付款狀態</td>
                <td>已付款</td>
              </tr>
              <tr>
                <td>刷卡狀態</td>
                <td>交易成功</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 position-relative">
          <button
            className=" orderlist-b1 me-3 px-3 py-2 mt-2 mb-2 "
            onClick={() => {
              setOrderDetailId(0);
            }}
          >
            回訂單查詢
          </button>
          <button
            className=" orderlist-b2 px-3 py-2 mt-2 mb-2"
            onClick={handleCancel}
          >
            取消訂單
          </button>
          <Modal
            title=""
            visible={isModalVisible}
            onOk={handleOk}
            // onCancel={handleCancel}
            okText="確認"
            OKType="$primary"
            cancelText="再想想"
            className="orderdetail_bt"
          >
            <h1>確定要取消訂單嗎？</h1>
          </Modal>
        </div>
      </div>

      {/* =========================================== */}
    </>
  );
  // console.log(detailtotal);

  // let app = [{orderid:1}]
  // console.log(app[0].orderid);
};

export default Detail;
