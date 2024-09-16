import Brandcard from './Brandcard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BrandcardList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let getBrands = async () => {
      // http://localhost:3003/api/brandpage
      let response = await axios.get('http://localhost:3003/api/brandpage');
      setBrands(response.data);
    };
    getBrands();
  }, []);
  // console.log(brands);

  return (
    <>
      <div className="container all-brand-card">
        <div className="row">
          {brands.map((v, i) => {
            return (
              <Brandcard
                key={v.id}
                business_name={v.business_name}
                business_id={v.id}
                business_logo={v.logo}
                business_introduce={v.introduce}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BrandcardList;
