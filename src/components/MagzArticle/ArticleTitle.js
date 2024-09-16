// import bookmark from '../../img/bookmark.svg';
import React from 'react';
import axios from 'axios';
import ArticleCollect from './ArticleCollect';

class ArticleTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: '',
      createTime: '',
      articleContext: '',
      author: '',
      image: '',
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3003/api/artmagazine/Magzarticle/${this.props.name}`
      )
      .then((res) => {
        this.setState(res.data);
        console.log(res.data);
      });
  }
  render() {
    return (
      <>
        <div className="article_main_img d-flex justify-content-center">
          {this.state.image && (
            <img
              src={`http://localhost:3003/images/artmagzs/${this.state.image}`}
              alt=""
            />
          )}
        </div>
        <div className="article_all_content">
          <div className="d-flex justify-content-between">
            <div className="article_text d-flex">
              <div className="article_author">{this.state.author}</div>
              <div className="article_create_time">{this.state.createTime}</div>
            </div>
            <ArticleCollect props={this.props} />
          </div>
          <h1 className="article_title">{this.state.articleTitle}</h1>
          <div
            className="article_context"
            dangerouslySetInnerHTML={{ __html: this.state.articleContext }}
          />
        </div>
      </>
    );
  }
}
// function ArticleTitle(props) {
//   const { name } = props;
//   const [MagzArticle, setMagzArticle] = useState({
//     articleTitle: '',
//     createTime: '',
//     articleContext: '',
//     author: '',
//     image: '',
//   });
//   // 向後端要資料
//   console.log('應該只執行一次');
//   axios
//     .get(`http://localhost:3003/api/artmagazine/Magzarticle/${name}`)
//     .then((res) => {
//       setMagzArticle(res.data);
//       console.log(res.data);
//     });

//   return (
//     <>
//       <div className="article_main_img d-flex justify-content-center">
//         <img
//           src={`http://localhost:3003/images/artmagzs/${MagzArticle.image}`}
//           alt=""
//         />
//       </div>
//       <div className="article_all_content">
//         <div className="d-flex justify-content-between">
//           <div className="article_text d-flex">
//             <div className="article_author">{MagzArticle.author}</div>
//             <div className="article_create_time">{MagzArticle.createTime}</div>
//           </div>
//           <img src={bookmark} alt="收藏" className="" />
//         </div>
//         <h1 className="article_title">{MagzArticle.articleTitle}</h1>
//         <div
//           className="article_context"
//           dangerouslySetInnerHTML={{ __html: MagzArticle.articleContext }}
//         />
//       </div>
//     </>
//   );
// }
export default ArticleTitle;
