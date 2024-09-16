import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import FavArticle from './FavArticle';
import { useLogin } from '../../utils/useLogin';

const Article = () => {
  const { user } = useLogin();

  const [arr, setArr] = useState([]);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/fav/blog/${user.userID}`);
      setArr(response.data);
      // console.log('article', response.data);
    };
     if (!user.userID) return;
    getUserLike();
  }, [user.userID]);

  // console.log('favblog', arr);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className="row">
          {arr.map((v, i) => {
            return (
              <div
                className=" Fac_card d-flex px-0 position-relative mb-3 border"
                key={v.id}
              >
                <FavArticle data={v} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Article;
