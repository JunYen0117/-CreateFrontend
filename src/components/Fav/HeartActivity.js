import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const HeartActivity = ({ data }) => {
  const [showheart, setShowHeart] = useState(true);
  // console.log(data);
  data = data || {};

  let user_id = 1;

  const delfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/activity/del/${user_id}/${data.exhibition_id}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  const addfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/activity/add/${user_id}/${data.exhibition_id}`
      );
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="Fac_heart"
          onClick={async () => {
            setShowHeart(false);
            delfav();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '取消收藏',
              showConfirmButton: false,
              timer: 1500,
            });
          }}
        />
      ) : (
        <BsHeart
          className="Fac_heart"
          onClick={async () => {
            setShowHeart(true);
            addfav();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '已成功加入收藏',
              showConfirmButton: false,
              timer: 1500,
            });
          }}
        />
      )}
    </>
  );
};

export default HeartActivity;
