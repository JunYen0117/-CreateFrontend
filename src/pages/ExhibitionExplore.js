import ExhibitionExploreMap from '../components/ExhibitionExplore/ExhibitionExploreMap';
import ExhibitionExploreCards from '../components/ExhibitionExplore/ExhibitionExploreCards';
import ExhibitionExploreButton from '../components/ExhibitionExplore/ExhibitionExploreButton';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/config';

function ExhibitionExplore(props) {
  const [exhibitions, setExhibitions] = useState([]);
  const [area, setArea] = useState('');
  const [level, setLevel] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    let getExhibitions = async () => {
      let response = await axios.get(API_URL + '/exhibition', {
        params: {
          area: area,
          level: level,
          date: date,
        },
      });
      setExhibitions(response.data);
    };
    getExhibitions();
  }, [area, level, date]);
  function handleExExhibitions() {
    exhibitions.map((item, index) => {
      return (item.position = { lat: item.latitude, lng: item.longitude });
    });
  }
  handleExExhibitions();
  console.log(area, level, date);
  return (
    <>
      {/* <ExhibitionExploreButton /> */}
      <div className="row container-fluid m-0 p-0 mt-2">
        <div className="col-12 col-md-4">
          <ExhibitionExploreCards
            exhibitions={exhibitions}
            area={area}
            setArea={setArea}
            level={level}
            setLevel={setLevel}
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="d-none d-md-block col-md-8 p-0">
          <ExhibitionExploreMap exhibitions={exhibitions} />
        </div>
      </div>
    </>
  );
}
export default ExhibitionExplore;
