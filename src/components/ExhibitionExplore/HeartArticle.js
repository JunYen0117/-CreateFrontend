import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useLogin } from '../../utils/useLogin';

const HeartArticle = (props) => {
  const [showheart, setShowHeart] = useState();
  const { exhibitionId } = props;
  const { user } = useLogin();

  useEffect(() => {
    setShowHeart(false);
  }, [user.userID]);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(
        `${API_URL}/fav/activity/check/${user.userID}/${exhibitionId}`
      );
      console.log('like', response.data);
      if (response.data.length === 0) {
        setShowHeart(false);
      } else {
        setShowHeart(true);
      }
    };
    if (!user.userID) return;
    getUserLike();
  }, [user.userID]);

  const delfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/activity/del/${user.userID}/${exhibitionId}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  const addfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/activity/add/${user.userID}/${exhibitionId}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="ex_heart"
          onClick={(e) => {
            if (!user.userID) {
              e.preventDefault();
              console.log('尚未登入');
            } else {
              setShowHeart(false);
              delfav();
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: '您尚未登入',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        />
      ) : (
        <BsHeart
          className="ex_heart"
          onClick={(e) => {
            if (!user.userID) {
              e.preventDefault();
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: '您尚未登入',
                showConfirmButton: false,
                timer: 1500,
              });
              console.log('尚未登入');
            } else {
              setShowHeart(true);
              addfav();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: '已成功加入收藏',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        />
      )}
    </>
  );
};

export default HeartArticle;
