import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';

function ActivityCard(props) {
  const { state } = props;
  const { avtivity } = props;
  const { changed, setChanged } = props;
  let orderId = '';
  let chState = '';

  avtivity.map((item, index) => {
    if (item.state === 1) {
      return (item.state_text = '已報名');
    } else if (item.state === 2) {
      return (item.state_text = '已取消');
    } else {
      return (item.state_text = '已使用');
    }
  });
  const handleClick = async () => {
    try {
      let response = await axios.put(API_URL + '/activity/state', {
        orderId: orderId,
        changeState: chState,
      });
      console.log(response.data);

      // Swal.fire({
      //   title: '購買成功',
      //   icon: 'success',
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //   }
      // });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className="row">
          {avtivity.map((item, index) => {
            return (
              <div
                key={index}
                className="ac_card d-flex border mb-4 ms-2 rounded-3 w-100 position-relative"
              >
                <div className="ac_cardimg  col-4 p-0 me-3 d-flex">
                  <img
                    src={`http://localhost:3003/images/exhibition/${item.exhibition_img}`}
                    alt=""
                    className="ac_img "
                  />
                </div>
                <div className="col-8 pt-3">
                  <h2>{item.exhibition_name} &nbsp;</h2>

                  <table className="ac_table">
                    <tbody>
                      <tr>
                        <th>展覽日期</th>
                        <td>
                          {item.start_date} ~ {item.end_date}
                        </td>
                      </tr>
                      <tr>
                        <th>展覽時間</th>
                        <td>
                          {item.start_time} ~ {item.end_time}
                        </td>
                      </tr>
                      <tr>
                        <th>活動地點</th>
                        <td>{item.exhibition_location}</td>
                      </tr>
                      <tr>
                        <th>狀態</th>
                        <td>{item.state_text}</td>
                      </tr>
                      <tr>
                        <th>數量</th>
                        <td>{item.count}</td>
                      </tr>
                      <tr className="Fac_tr">
                        <th>總價</th>
                        <td>NT ${item.total}</td>
                      </tr>
                    </tbody>
                  </table>
                  {state === 1 ? (
                    <div className="d-flex justify-content-end">
                      <button
                        className="text-white  d-block ac_button m-0 btn btn-primary mx-3"
                        onClick={() => {
                          orderId = item.id;
                          chState = 0;
                          Swal.fire({
                            title: '您確定要使用票卷嗎?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '確定',
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: '您的票卷',
                                iconHtml:
                                  '<img src="http://localhost:3003/images/exhibition/ticket.png">',
                                text: '入場時請出示給現場人員',
                                customClass: {
                                  icon: 'no-border',
                                },

                                //QR Code API
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  setChanged(!changed);
                                }
                              });
                            }
                            handleClick();
                          });
                        }}
                      >
                        使用
                      </button>
                      <button
                        className="text-white  d-block ac_button m-0 btn btn-danger"
                        onClick={() => {
                          orderId = item.id;
                          chState = 2;
                          Swal.fire({
                            title: '您確定要取消活動嗎?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '確定',
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                '取消',
                                '您的活動已取消',
                                'success'
                              ).then((result) => {
                                if (result.isConfirmed) {
                                  setChanged(!changed);
                                }
                              });
                            }
                            handleClick();
                          });
                        }}
                      >
                        取消
                      </button>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ActivityCard;
