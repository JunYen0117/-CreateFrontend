import { Link } from 'react-router-dom';

function MagzItem(props) {
  const { title, context, image, name, authorName } = props;
  const url = `/ArtMagazine?name=${name}`;
  return (
    <>
      <div className="magz_list col-12 justify-content-start mb-3">
        <div className="d-flex align-items-start ">
          <Link to={url}>
            <div className="magz_img flex-shrink-0">
              <img
                src={`http://localhost:3003/images/artmagzs/${image}`}
                alt=""
              />
            </div>
          </Link>
          <div className="magz_text">
            <Link to={url} className="magz_title text-decoration-none">
              {title}
            </Link>
            <p className="magz_author_name">{authorName}</p>
            <div className="magz_list_line"></div>
            <div
              className="magz_author_context"
              dangerouslySetInnerHTML={{ __html: context }}
            />
            {/* <p className="magz_author_context">{context}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default MagzItem;
