import { useEffect, useState } from 'react';
import { useLogin } from '../../utils/useLogin';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import DetailNotShipped from './DetailNotShipped';
import { Collapse } from 'antd';

const ListNotShipped = () => {
  const [orderShipped, setOrderShipped] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);
  const [detailpayment, setDetailPayment] = useState([]);
  const [detailreceiver, setDetailReceiver] = useState([]);
  const { Panel } = Collapse;
  const { user } = useLogin();

  useEffect(() => {
    if (!user.userID) return;
    getOrderShipped();
  }, [user.userID, orderId]);

  const getOrderShipped = async () => {
    // axios.get(URL, config)
    let response = await axios.get(
      API_URL + `/productorder/notshipped/${user.userID}`
    );
    setOrderShipped(response.data);
  };
  // console.log('list', orderShipped);

  useEffect(() => {
    if (orderId === 0) return;
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(
        API_URL + `/productorder/notshipped/detail/${orderId}`
      );
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
      setDetailReceiver(response.data.receiver);
      setDetailPayment(response.data.payment);
    };
    getDetail();
  }, [orderId]);

  // console.log(orderId);

  let arr = orderShipped.arrshipped || [];

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
                        <td>NT${v.totalsub}</td>
                      </tr>
                      <tr>
                        <td>處理狀態</td>
                        <td>訂單處理中</td>
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
                <DetailNotShipped
                  setOrderId={setOrderId}
                  orderId={orderId}
                  detail={detail}
                  detailtotal={detailtotal}
                  detailreceiver={detailreceiver}
                  detailpayment={detailpayment}
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

export default ListNotShipped;
