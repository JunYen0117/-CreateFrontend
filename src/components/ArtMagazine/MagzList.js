import { useState, useEffect } from 'react';
import axios from 'axios';
import MagzItem from './MagzItem';

function MagzList(props) {
  const { artStatus } = props;
  const [artmagzs, setArtmagzs] = useState([]);

  useEffect(() => {
    let getArtmagzs = async () => {
      // http://localhost:3003/api/artmagazine
      let response = await axios.get('http://localhost:3003/api/artmagazine', {
        params: {
          status: artStatus,
        },
      });
      setArtmagzs(response.data);
    };
    getArtmagzs();
  }, [artStatus]);

  return (
    <>
      {artmagzs.map((v, i) => {
        return (
          <MagzItem
            key={v.id}
            title={v.title}
            context={v.article_context}
            image={v.image}
            authorName={v.author_name}
            name={v.id}
          />
        );
      })}
    </>
  );
}
export default MagzList;
