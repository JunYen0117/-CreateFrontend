import React from 'react';
import { BsTag, BsTagsFill } from 'react-icons/bs';
import { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const ArticleCollect = ({ props }) => {
  const [showTag, setShowTag] = useState(false);
  // console.log('ad', props);

  let user_id = 1;

  const delfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/blog/del/${user_id}/${props.name}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  const addfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/blog/add/${user_id}/${props.name}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {showTag ? (
        <BsTagsFill
          className="magz_tag"
          onClick={async () => {
            setShowTag(false);
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
        <BsTag
          className="magz_tag"
          onClick={async () => {
            setShowTag(true);
            addfav();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '已成功收藏文章',
              showConfirmButton: false,
              timer: 1500,
            });
          }}
        />
      )}
    </>
  );
};

export default ArticleCollect;
