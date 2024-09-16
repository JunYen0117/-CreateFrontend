import React from 'react';
import HeartArticle from './HeartArticle';
import { Link, useHistory } from 'react-router-dom';

const FavArticle = (props) => {
  const { data } = props;
  const goPath = useHistory();
  // console.log('favarticle', data);

  return (
    <>
      <div
        className=" col-3 position-relative "
        style={{ width: '10rem', height: '10rem' }}
      >
        <img
          className="Far_img"
          src={`http://localhost:3003/images/artmagzs/${data.image}`}
          alt=""
          onClick={() => goPath.push(`/ArtMagazine?name=${data.blog_id}`)}
        />
      </div>
      <div className="col-9 mx-3 mt-2 ">
        <HeartArticle className="Far_heart" data={data} />
        <h2>{data.title}</h2>
        <p className="Far_context lh-lg">{data.article_context}</p>
      </div>
    </>
  );
};

export default FavArticle;
