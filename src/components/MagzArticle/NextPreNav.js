// 箭頭
import prearrow from '../../img/dashicons_arrow-pre.svg';
import nextarrow from '../../img/dashicons_arrow-next.svg';
import { Link, useLocation } from 'react-router-dom';

function NextPreNav() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = Number(searchParams.get('name'));

  return (
    <>
      <div className="nextpre-nav">
        <div className="d-flex justify-content-between nav">
          <div className="pre-article d-flex align-items-center">
            <a href={`/ArtMagazine?name=${name > 1 ? name - 1 : 1}`}>
              <img src={prearrow} alt="" />
              上一篇
            </a>
          </div>
          <div className="backto-article">
            <Link to="/ArtMagazine">回列表</Link>
          </div>
          <div className="next-article d-flex align-items-center">
            <a href={`/ArtMagazine?name=${name < 10 ? name + 1 : 10}`}>
              下一篇
              <img src={nextarrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default NextPreNav;
