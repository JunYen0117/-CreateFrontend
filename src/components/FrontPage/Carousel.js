import LeftCircle from '../../img/left-circle.svg';
import RightCircle from '../../img/right-circle.svg';

export default function Carousel(props) {
  return (
    <>
      <div
        id={props.key_}
        className="carousel slide d-flex justify-content-between"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{props.children}</div>
        {/* 左按鈕 */}
        <button
          className="d-flex align-items-start justify-content-center carousel-control-prev "
          type="button"
          data-bs-target={'#' + props.key_}
          data-bs-slide="prev"
        >
          <img src={LeftCircle} alt="" className="left-button" />
        </button>
        {/* 右按鈕 */}
        <button
          className="d-flex align-items-start justify-content-center carousel-control-next"
          type="button"
          data-bs-target={'#' + props.key_}
          data-bs-slide="next"
        >
          <img src={RightCircle} alt="" className="right-button" />
        </button>
      </div>
    </>
  );
}
