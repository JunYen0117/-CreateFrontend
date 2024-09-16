// import '../../styles/_frontpage.scss';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCards(props) {
  // const [frontproduct, setFrontproduct] = useState;

  // useEffect(() => {
  //   let getFrontproduct = async () => {
  //     // http://localhost:3003/api/brandpage
  //     let response = await axios.get('http://localhost:3003/api/front');
  //     setFrontproduct(response.data);
  //   };
  //   getFrontproduct();
  // }, []);

  return (
    <>
      {props.datas.map((Productdatas, index) => {
        const a = index === 0 ? 'active' : '';
        return (
          <div  key={index} className={`carousel-item ${a}`}>
            <div className="all-logo d-flex justify-content-between">
              {Productdatas.map((content, i) => (
                <ProductCard key={content.id} {...content} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCards;
