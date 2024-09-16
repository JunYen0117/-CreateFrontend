import Graduation from '../../img/graduation.jpg';
import AllMagazine from '../../img/allmagazine.jpg';

function MagzOption(props) {
  const { setArtStatus } = props;

  return (
    <>
      <div className="row justify-content-between mt-2 gy-3 magz_options">
        <div className="col-12 col-md-6 magz_button1">
          <div className="cursor_pointer" onClick={() => setArtStatus(1)}>
            <div className="magz_mask">
              <img src={Graduation} alt="" />
              <p className="magz_option_text">畢業季</p>
              <div className="magz_option_mask"></div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 magz_button2">
          <div className="cursor_pointer" onClick={() => setArtStatus(0)}>
            <div className="magz_mask">
              <img src={AllMagazine} alt="" />
              <p className="magz_option_text">全部文章</p>
              <div className="magz_option_mask"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MagzOption;
