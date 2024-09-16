import Logo from '../../img/purple.jpg';
import FB from '../../img/StoreInformationSVG/Facebook.svg';
import IG from '../../img/StoreInformationSVG/Instagram.svg';
import YT from '../../img/StoreInformationSVG/Youtube.svg';
import Line from '../../img/StoreInformationSVG/Line.svg';

import { Rate } from 'antd';
import 'antd/dist/antd.css';

function StoreInformation(props) {
  const { brandProducts } = props;

  const logo = brandProducts.logo;


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-body d-flex col-6">
            <img src={`http://localhost:3003/images/brand/${logo}`} alt="" className="logo" />
            <div className="brand-imformation">
              <h2 className="store_name">{brandProducts.brandName}</h2>
              <div className="comment d-inline-block">
                <Rate disabled defaultValue={4} />
                <div className="d-inline-block me-3">4.0</div>
                <div className="product_comment_id d-inline-block">(30)</div>
              </div>
              <div className="d-flex justify-content-start align-items-end">
                <div className="product-vendor_id me-md-5">
                  <p>商品數量</p>
                  <div className="count">{brandProducts.quantity}</div>
                </div>
                <div className="customer_order_detail">
                  <p>已賣出數量</p>
                  <div className="count">50</div>
                </div>
              </div>
            </div>
          </div>
          {/* 資訊連結 */}
          <div className="col-6 d-flex align-items-end">
            <div className="border-line">
              <div className="information gx-2">
                分享：
                <a
                  href="https://www.facebook.com/lancedivingpalau"
                  className="information_icon"
                >
                  <img src={FB} alt="Facebook" />
                </a>
                <a href="/" className="information_icon">
                  <img src={IG} alt="Instagram" />
                </a>
                <a
                  href="https://youtu.be/dQw4w9WgXcQ"
                  className="information_icon"
                >
                  <img src={YT} alt="Youtube" />
                </a>
                <a href="/" className="information_icon">
                  <img src={Line} alt="Line" />
                </a>
              </div>
              <div className="information d-flex ">
                <div>地址：</div>
                <p className="store_address">{brandProducts.address}</p>
              </div>
              <div className="information d-flex">
                <div>加入時間：</div>
                <p className="create_time">{brandProducts.create_time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StoreInformation;
