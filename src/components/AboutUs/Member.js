import miu from '../../img/member/miumiu.jpg';
import bo from '../../img/member/bochen.jpg';
import cathy from '../../img/member/cathy.jpg';
import jun from '../../img/member/junyen.jpg';
import kung from '../../img/member/kung.jpg';
import wen from '../../img/member/wen.jpg';

function Member() {
  return (
    <>
      <div className="flex_box1 d-flex justify-content-center">
        <div className="member-card mx-5">
          <img src={jun} alt="" className="" />
          <div className="">
            <p>組長 / 李俊彥</p>
          </div>
        </div>
        <div className="member-card mx-5">
          <img src={kung} alt="" className="" />
          <div className="">
            <p>技術 / 蘇中康</p>
          </div>
        </div>
        <div className="member-card mx-5">
          <img src={wen} alt="" className="" />
          <div className="">
            <p>設計 / 廖敏文</p>
          </div>
        </div>
      </div>
      <div className="flex_box2 d-flex justify-content-center">
        <div className="member-card pb-5 mx-5">
          <img src={cathy} alt="" className="" />
          <div className="">
            <p>組員 / 許湘君</p>
          </div>
        </div>
        <div className="member-card pb-5 mx-5">
          <img src={bo} alt="" className="" />
          <div className="">
            <p>組員 / 蘇柏銓</p>
          </div>
        </div>
        <div className="member-card pb-5 mx-5">
          <img src={miu} alt="" className="" />
          <div className="">
            <p>組員 / 曾姿綾</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
