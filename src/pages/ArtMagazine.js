import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MagzOption from '../components/ArtMagazine/MagzOption';
import MagzList from '../components/ArtMagazine/MagzList';
import ArticleTitle from '../components/MagzArticle/ArticleTitle';
import NextPreNav from '../components/MagzArticle/NextPreNav';
import CommentAPP from '../components/MagzArticle/CommentAPP';
import CommentInput from '../components/MagzArticle/CommentInput';
import { useLogin } from '../utils/useLogin';

function ArtMagazine() {
  const { user } = useLogin();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  const [artStatus, setArtStatus] = useState(0);

  // console.log('first');
  if (name === null) {
    return (
      <>
        <div className="container">
          <MagzOption setArtStatus={setArtStatus} />
          <div className="magz_all_line" />
          <div className="row magz_all px-3">
            <MagzList artStatus={artStatus} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container my-4">
        <ArticleTitle name={name} />
        <div className="demarcation" />
        <NextPreNav />
        <CommentInput user={user} name={name} />
      </div>
    </>
  );
}

export default ArtMagazine;
