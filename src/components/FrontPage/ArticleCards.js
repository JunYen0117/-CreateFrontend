import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ArticleCards(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let getArticles = async () => {
      // http://localhost:3003/api/artmagazine
      let response = await axios.get('http://localhost:3003/api/artmagazine');
      setArticles(response.data);
    };
    getArticles();
  }, []);

  return (
    <>
      <h2 className="front_h2">
        <Link to="/ArtMagazine">精選文章</Link>
      </h2>
      <div className="container article-container">
        <div>
          <div className="all-article-card row justify-content-between">
            {articles.map((v, i) => {
              if (i >= 2) {
                return;
              }
              return (
                <ArticleCard
                  key={v.id}
                  title={v.title}
                  context={v.article_context}
                  image={v.image}
                  ArticleId={v.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleCards;
