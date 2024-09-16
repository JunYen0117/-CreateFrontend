import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const DetailCancel = (props) => {
  const { setOrderId } = props;
  const { orderId } = props;
  const { detail, detailtotal, detailreceiver, detailpayment } = props;
  //  console.log('cancel', orderId)
  return (
    <>
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
              {detail.map((v, i) => {
                return (
                  <tr key={`detail-${v.id}`} className="detail_td">
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
                  <td>NT$ 100</td>
                </tr>
                <tr className="text-danger">
                  <td>優惠券折抵</td>
                  <td>- NT $100</td>
                </tr>
                <tr>
                  <td>總金額</td>
                  <td className="ol_f">NT$ {detailtotal } </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="orderlist-card w-100 ">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">付款人資訊</div>
        </div>
        <div className="card-content ">
          <table className="ol_table">
            {detailpayment.map((v) => {
              return (
                <tbody key={`table-${v.id}`}>
                  <tr>
                    <td className="fw-bold">付款人</td>
                    <td>{v.member_name}</td>
                    <td className="fw-bold">付款方式</td>
                    <td>線上信用卡付款</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">付款人地址</td>
                    <td>{v.address}</td>
                    <td className="fw-bold">付款狀態</td>
                    <td>已付款</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">付款人電話</td>
                    <td>{v.phone}</td>
                    <td className="fw-bold">刷卡狀態</td>
                    <td className="text-dark">交易成功</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <div className="orderlist-card w-100 ">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">收件人資訊</div>
        </div>
        <div className="card-content ">
          <table className="ol_table">
            {detailreceiver.map((v) => {
              return (
                <tbody key={v.id}>
                  <tr>
                    <td className="fw-bold">收件人</td>
                    <td>{v.recipient}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">收件人email</td>
                    <td>{v.recipient_email}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">收件人電話</td>
                    <td>{v.tel}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">收件人地址</td>
                    <td>{v.address}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">運送方式</td>
                    <td>{v.delivery}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">＊備註</td>
                    <td>到家前請電話通知</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className="mt-5 position-relative">
          <button
            className=" orderlist-b1 me-3 px-3 py-2 mt-2 mb-2 "
            onClick={() => {
              setOrderId(0);
            }}
          >
            回訂單查詢
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailCancel;
