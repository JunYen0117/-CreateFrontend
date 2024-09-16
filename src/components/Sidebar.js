import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="col-md-4 text-center">
          <li>
            <NavLink to="/activity" className="text-decoration-none" exact>
              我的活動
            </NavLink>
          </li>
          <li>
            <NavLink to="/fav" className="text-decoration-none" exact>
              我的收藏
            </NavLink>
          </li>
          <li>
            <NavLink to="/member" className="text-decoration-none" exact>
              帳戶設定
            </NavLink>
          </li>
          <li>
            <NavLink to="/pwdchanging" className="text-decoration-none" exact>
              變更密碼
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className="text-decoration-none" exact>
              我的訂單
            </NavLink>
          </li>
          <li>
            <NavLink to="/coupon" className="text-decoration-none" exact>
              優惠券
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
