import { Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { useLogin } from '../../utils/useLogin';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import DetailFinish from './DetailFinish';
import 'antd/dist/antd.css';

const ListFinish = (props) => {
  const { orderStatus } = props;
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);
  const [detailpayment, setDetailPayment] = useState([]);
  const [detailreceiver, setDetailReceiver] = useState([]);
  const [comment, setComment] = useState([]);
  const { Panel } = Collapse;
  const { user } = useLogin();

  //連接後端
  useEffect(() => {
    let getOrders = async () => {
      // axios.get(URL, config)
      let response = await axios.get(
        API_URL + `/productorder/finish/${user.userID}`
      );
      setOrders(response.data);
    };
    if (!user.userID) return;
    getOrders();
  }, [user.userID, orderStatus]);

  let arr = orders.totalarr || [];

  // 取得訂單明細所需資料
  useEffect(() => {
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(
        API_URL + `/productorder/finish/detail/${orderId}`
      );
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
      setDetailPayment(response.data.payment);
      setDetailReceiver(response.data.receiver);
    };
    if (orderId === 0) return;
    getDetail();
  }, [orderId]);

  // console.log('bb', detail);

  // 取得評論判斷
  useEffect(() => {
    if (orderId === 0) return;
    let getComment = async () => {
      let response = await axios.get(API_URL + `/comment/product/checked`, {
        params: {
          orderId: orderId,
        },
      });
      setComment(response.data);
    };
    getComment();
  }, [orderId, comment]);

  // console.log('commit', comment);

  return (
    <>
      {arr.map((v, i) => {
        return (
          <Collapse accordion className="orderlist-card" key={i}>
            <Panel
              header={`訂單編號 ${v.orderid}`}
              key="1"
              className=" card-title"
            >
              {orderId === v.orderid ? (
                ''
              ) : (
                <div className="card-content">
                  <table className="ol_tableList ">
                    <tbody>
                      <tr>
                        <td>訂單日期</td>
                        <td>{v.orderdate}</td>
                      </tr>
                      <tr>
                        <td>訂單金額</td>
                        <td>NT$ {v.totalsub}</td>
                      </tr>
                      <tr>
                        <td>處理狀態</td>
                        <td>已取貨</td>
                      </tr>
                      <tr>
                        <td>付款方式</td>
                        <td>信用卡-付款</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className="card-button px-3 py-2"
                    onClick={() => {
                      setOrderId(v.orderid);
                    }}
                  >
                    <FaWaze
                      className="me-2"
                      style={{ color: 'rgb(182, 115, 115)' }}
                    />
                    查看訂單明細
                  </button>
                </div>
              )}
              {orderId === v.orderid ? (
                <DetailFinish
                  key={v.id}
                  setOrderId={setOrderId}
                  orderId={orderId}
                  detail={detail}
                  detailtotal={detailtotal}
                  detailreceiver={detailreceiver}
                  detailpayment={detailpayment}
                  comment={comment}
                />
              ) : (
                ''
              )}
            </Panel>
          </Collapse>
        );
      })}
    </>
  );
};

export default ListFinish;
