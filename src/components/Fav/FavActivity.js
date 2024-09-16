import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import HeartActivity from './HeartActivity';
import Milu from '../../img/Milu.jpg';
import { FcAdvertising } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';

const FavActivity = (props) => {
  const { data } = props;
  const goPath = useHistory();
  // console.log(data);
  return (
    <>
      <div className=" col-3 position-relative " style={{ height: '13rem' }}>
        <img
          className="Fac_img"
          src={`http://localhost:3003/images/exhibition/${data.exhibition_img}`}
          alt=""
          onClick={() => goPath.push(`/exhibition/${data.exhibition_id}`)}
        />
      </div>
      <div className="col-9 position-relative ">
        <HeartActivity data={data} />
        <table className="Fac_table mx-5 mt-2 mb-2">
          <tbody>
            <tr>
              <th className="Fac-name mb-2">
                <FcAdvertising /> &nbsp;
                {data.exhibition_name}
              </th>
            </tr>
            <hr />
            <tr>
              <th className="Fac-th">展覽日期</th>
              <td className="Fac-td">
                {data.start_date} - {data.end_date}
              </td>
            </tr>
            <tr>
              <th className="Fac-th">展覽時間</th>
              <td className="Fac-td">
                {data.start_time} - {data.end_time}
              </td>
            </tr>
            <tr>
              <th className="Fac-th">活動地點</th>
              <td className="Fac-td">{data.exhibition_location}</td>
            </tr>
            <tr className="Fac_tr">
              <th className="Fac-th">票價</th>
              <td className="Fac-td">NT$ {data.exhibition_price}</td>
            </tr>
          </tbody>
        </table>
        <Button
          variant="primary"
          className="text-white d-block Fac_button mb-2"
        >
          <FaShoppingCart className="me-3 " />
          購票去
        </Button>
      </div>
    </>
  );
};

export default FavActivity;
