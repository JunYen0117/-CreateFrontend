import Banner0 from '../../img/banner0.jpg';

function Banner() {
  return (
    <>
      <div className="banner">
        <img src={Banner0} alt="" className="d-block w-100" />
      </div>
      <div className="banner-text">
        <p className="text-center">
          太多設計館不知道如何逛起？
          <br />
          創藝迴廊推薦你從這些受歡迎、兼具美感與質感，並提供良好服務的寶藏品牌開始！
        </p>
      </div>
    </>
  );
}
export default Banner;
