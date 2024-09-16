import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import FavProduct from './FavProduct';
import { useLogin } from '../../utils/useLogin';

const FavProductList = () => {
  const { user } = useLogin();

  const [favProducts, setFavProducts] = useState([]);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/fav/product/${user.userID}`);
      setFavProducts(response.data);
      // console.log('product', response.data);
    };
    if (!user.userID) return;
    getUserLike();
  }, [user.userID]);

  // console.log('favProducts', favProducts);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className=" row ">
          {favProducts.map((v, i) => {
            return (
              <div className="col-2 position-relative" key={v.id}>
                <FavProduct product={v} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavProductList;
