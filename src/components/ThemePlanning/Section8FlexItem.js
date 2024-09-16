import course1 from '../../img/themeplanning/course1.jpg';
import course2 from '../../img/themeplanning/course2.jpg';
import course3 from '../../img/themeplanning/course3.jpg';
import { ReactComponent as HeartRed } from '../../img/themeplanning/HeartRed.svg';

function Section8FlexItem() {
  return (
    <>
      <div className="section8_card mx-1 mx-md-2">
        <figure className="theme_planning_avatar">
          <a href="#/" alt="#/">
            <HeartRed />
          </a>
          <img className="pic" src={course1} alt="#/" />
        </figure>
        <h5 className="p-1 p-md-3">課程 - 戀戀銀飾</h5>
        <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
          <li className="site">台北市</li>
          <li className="price">NT 200</li>
        </ul>
      </div>

      <div className="section8_card mx-1 mx-md-2">
        <figure className="theme_planning_avatar">
          <a href="#/" alt="#/">
            <HeartRed />
          </a>
          <img className="pic" src={course2} alt="#/" />
        </figure>
        <h5 className="p-1 p-md-3">課程 - 蕨光陽台</h5>
        <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
          <li className="site">台中市</li>
          <li className="price">NT 180</li>
        </ul>
      </div>

      <div className="section8_card mx-1 mx-md-2">
        <figure className="theme_planning_avatar">
          <a href="#/" alt="#/">
            <HeartRed />
          </a>
          <img className="pic" src={course3} alt="#/" />
        </figure>
        <h5 className="p-1 p-md-3">課程 - 敲木金工</h5>
        <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
          <li className="site">桃園市</li>
          <li className="price">NT 320</li>
        </ul>
      </div>
    </>
  );
}

export default Section8FlexItem;
