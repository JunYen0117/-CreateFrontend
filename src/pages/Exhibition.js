import ExhibitionSidebar from '../components/Exhibition/ExhibitionSidebar';
import ExhibitionText from '../components/Exhibition/ExhibitionText';
import ExhibitionCarousel from '../components/Exhibition/ExhibitionCarousel';
import ExhibitionOrder from '../components/Exhibition/ExhibitionOrder';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/config';
import { Params, useParams } from 'react-router-dom';

function Exhibition(props) {
  const { exhibitionId } = useParams();
  const [exhibition, setExhibition] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    let getExhibition = async () => {
      let response = await axios.get(`${API_URL}/exhibition/${exhibitionId}`);
      setExhibition(response.data.exhibition);
      setImg(response.data.image);
    };
    getExhibition();
  }, []);
  // const a = img.map((item, index) => {
  //   return { ...item };
  // });
  // console.log(a);
  // console.log(exhibition);

  return (
    <>
      <div className="container">
        <ExhibitionCarousel images={img} />
        <div className="d-flex">
          <div className="col-12 col-md-10">
            <ExhibitionText exhibition={exhibition} />
          </div>
          <div className="col-2 d-none d-md-block ">
            <ExhibitionSidebar className="d-flex justify-content-center" />
          </div>
        </div>
        <div className="row exhibition-order-card ">
          <div className="col-12 col-md-8 ">
            <ExhibitionOrder exhibition={exhibition} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Exhibition;
