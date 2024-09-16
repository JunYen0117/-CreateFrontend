import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineUndo,
} from 'react-icons/ai';
import { useState } from 'react';
import { useLogin } from '../../utils/useLogin';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function ExhibitionOrder(props) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const { user } = useLogin();
  const { exhibition } = props;

  return (
    <>
      {exhibition.map((item, index) => {
        return (
          <div key={index} className="exhibition-order mx-2">
            <div className="row my-4">
              <div className="col ex-title">
                <h1>{item.exhibition_name}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>
                  展覽時間 {item.start_date} ~ {item.end_date} (
                  {item.start_time} ~ {item.end_time})
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">NT{item.exhibition_price}</div>
            </div>
            <div className="row">
              <div className="col">選擇張數</div>
              <div className="col text-end">
                <a
                  href="#/"
                  className="text-decoration-none icon"
                  style={{ color: '#903f23' }}
                  onClick={(e) => {
                    setCount(0);
                    setTotal(0);
                    e.preventDefault();
                  }}
                >
                  <AiOutlineUndo />
                </a>
                <a
                  href="#/"
                  className="text-decoration-none "
                  style={{ color: '#903f23' }}
                  onClick={(e) => {
                    setCount(0);
                    setTotal(0);
                    e.preventDefault();
                  }}
                >
                  重選
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-4">張數</div>
              <div className="col-4 per">NT{item.exhibition_price}/每張</div>
              <div className="col-4 text-end">
                <a
                  href="#/"
                  className={`icon ${count <= 0 ? 'icon-disable' : ''}`}
                  onClick={(e) => {
                    let newCount = count - 1;
                    newCount < 0 ? (newCount = 0) : setCount(newCount);
                    setTotal(newCount * item.exhibition_price);
                    e.preventDefault();
                  }}
                >
                  <AiOutlineMinusCircle />
                </a>
                <a
                  href="#/"
                  className="text-decoration-none mx-4 tatol"
                  style={{ color: 'black' }}
                >
                  {count}
                </a>
                <a
                  href="#/"
                  className={`icon ${count >= 5 ? 'icon-disable' : ''}`}
                  onClick={(e) => {
                    let newCount = count + 1;
                    newCount > 5 ? (newCount = 5) : setCount(newCount);
                    setTotal(newCount * item.exhibition_price);
                    e.preventDefault();
                  }}
                >
                  <AiOutlinePlusCircle />
                </a>
              </div>
            </div>

            <hr></hr>
            <div className="text-end">
              <div className="total-price my-2">
                總金額 <span>NT{total}</span>
              </div>
              <Link to={'/activitypayment'}>
                <button
                  className="my-4 submit-button"
                  onClick={(e) => {
                    let obj = {
                      exhibition_id: `${item.id}`,
                      exhibition_name: `${item.exhibition_name}`,
                      price: `${item.exhibition_price}`,
                      count: `${count}`,
                      total: `${total}`,
                      date: {
                        start: `${item.start_date}`,
                        end: `${item.end_date}`,
                      },
                    };

                    if (!user.userID) {
                      e.preventDefault();
                      console.log('尚未登入');
                      Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: '您尚未登入',
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                    if (count === 0) {
                      e.preventDefault();
                      Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: '您未選擇數量',
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }

                    window.sessionStorage.setItem('order', JSON.stringify(obj));
                    // sessionStorage.setItem('key', JSON.stringify(obj));
                  }}
                >
                  立即購買
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExhibitionOrder;
