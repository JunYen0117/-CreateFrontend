import exhi1 from '../../img/themeplanning/exhi1.jpg';
import exhi2 from '../../img/themeplanning/exhi2.jpg';
import exhi3 from '../../img/themeplanning/exhi3.jpg';
import { ReactComponent as HeartRed } from '../../img/themeplanning/HeartRed.svg';

function Section7FlexItem() {
  return (
    <>
      <div className="section7_card mx-1 mx-md-2">
        <figure className="theme_planning_avatar">
          <a href="#/" alt="#/">
            <HeartRed />
          </a>
          <img className="pic" src={exhi1} alt="#/" />
        </figure>
        <h5 className="p-1 p-md-3">果陀劇場 - 生命最美好的五分鐘</h5>
        <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
          <li className="site">桃園市</li>
          <li className="price">NT 480</li>
        </ul>
      </div>

      <div className="section7_card mx-1 mx-md-2">
        <figure className="theme_planning_avatar">
          <a href="#/" alt="#/">
            <HeartRed />
          </a>
          <img className="pic" src={exhi2} alt="#/" />
        </figure>
        <h5 className="p-1 p-md-3">以拉號奇航 - 台灣插畫展</h5>
        <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
          <li className="site">台北市</li>
          <li className="price">NT 300</li>
        </ul>
      </div>

      <div className="section7_card mx-1 mx-md-2">
        <figure className="theme_planning_avatar">
          <a href="#/" alt="#/">
            <HeartRed />
          </a>
          <img className="pic" src={exhi3} alt="#/" />
        </figure>
        <h5 className="p-1 p-md-3">蔡草如 - 神話、戲台與逆光赤城</h5>
        <ul className="d-flex justify-content-between p-1 p-md-3 pb-md-5">
          <li className="site">高雄市</li>
          <li className="price">NT 80</li>
        </ul>
      </div>
    </>
  );
}

export default Section7FlexItem;
