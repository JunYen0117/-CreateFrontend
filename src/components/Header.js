import { ReactComponent as LogoSvg } from '../img/header/logo.svg';
import LogoDesktop from '../img/header/logo.svg';
import { ReactComponent as Search } from '../img/header/search.svg';
import { ReactComponent as Shopcart1 } from '../img/header/shopcart1.svg';
import { ReactComponent as Hamburger } from '../img/header/Hamburger.svg';
import { ReactComponent as MobileSearch } from '../img/header/MobileSearch.svg';
import { ReactComponent as More } from '../img/header/More.svg';
import { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SignupLogin from './SignupLogin/SignupLogin';
import LoginDropdown from './SignupLogin/LoginDropdown';

import { useCart } from '../utils/useCart';
import { useLogin } from '../utils/useLogin';

const LogoMobile = styled(LogoSvg)`
  width: 90px;
`;

function Header() {
  const { cart } = useCart();
  //傳入登入狀態，從App.js -> Header.js
  const { isLogin } = useLogin();

  //offcanvas套件：useState狀態、開關
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const handleCloseLeft = () => setShowLeft(false);
  const handleCloseRight = () => setShowRight(false);
  const handleShowLeft = () => setShowLeft(true);
  const handleShowRight = () => setShowRight(true);

  const history = useHistory();

  if (window.location.href === 'http://localhost:3000/') {
    return <></>;
  }

  return (
    <>
      {/* console.log(props.isLogin)*/}
      <header className="container-fluid">
        <div className="d-none d-md-flex justify-content-between">
          <div className="d-flex ms-5">
            <figure className="desktop_figure mx-5 mt-4">
              <span
                className="header_a"
                onClick={() => {
                  history.push('/Front');
                }}
              >
                <img src={LogoDesktop} alt="" />
              </span>
            </figure>
          </div>
          <ul className="header_top menu1 d-none d-md-flex pt-4 ">
            <li className="shopcart_item mt-3 me-3">
              <Link to="/cart">
                <Shopcart1 />
                <span>{cart.totalItems}</span>
              </Link>
            </li>
            <li className="profile_item mt-3 me-5">
              {isLogin === true ? <LoginDropdown /> : <SignupLogin />}
            </li>
          </ul>
        </div>
        <ul className="menu2 d-none d-md-flex justify-content-around pt-4">
          <li>
            <NavLink to="/themeplanning" exact>
              主題企劃
            </NavLink>
          </li>
          <li>
            <NavLink to="/exhibition" exact>
              活動資訊
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" exact>
              購物商城
            </NavLink>
          </li>
          <li>
            <NavLink to="/ArtMagazine" exact>
              文章專欄
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" exact>
              關於我們
            </NavLink>
          </li>
        </ul>
        {/* 以下為手機版 */}
        <figure className="mobile_figure d-md-none mx-auto">
          <a href="#/" className="header_a">
            <LogoMobile />
          </a>
        </figure>
        <ul className="mobile_menu d-flex justify-content-between d-md-none">
          <figure>
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvas_left"
              role="button"
              aria-controls="offcanvasExample"
              onClick={handleShowLeft}
            >
              <Hamburger />
            </a>
          </figure>
          <ul className="d-flex">
            <figure className="me-3">
              <a href="#/" className="header_a">
                <MobileSearch />
              </a>
            </figure>
            <figure>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvas_right"
                role="button"
                aria-controls="offcanvasExample"
                onClick={handleShowRight}
              >
                <More />
              </a>
            </figure>
          </ul>
        </ul>

        {/* offcanvas套件開始 */}
        <Offcanvas
          className="header_offcanvas"
          show={showLeft}
          onHide={handleCloseLeft}
        >
          <Offcanvas.Header className="d-none">
            {/* li包的button是關閉canvas的按鈕 */}
            <li className="d-none">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </li>
            <li>
              <a href="#/" className="header_a">
                主題企劃
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                活動資訊
              </a>
            </li>
            <li>
              <Link to="/product" className="header_a">
                購物商城
              </Link>
            </li>
            <li>
              <a href="#/" className="header_a">
                文章專欄
              </a>
            </li>
            <li className="last_li">
              <a href="#/" className="header_a">
                關於我們
              </a>
            </li>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas_left_menu">
            <ul className="left_offcanvas_body">
              <li>
                {<SignupLogin />}
                {isLogin === false ? (
                  <a href="#/">登入</a>
                ) : (
                  <a href="#/">登出</a>
                )}
              </li>
              <li>
                <NavLink to="/themeplanning" exact onClick={handleCloseLeft}>
                  主題企劃
                </NavLink>
              </li>
              <li>
                <NavLink to="#/" exact onClick={handleCloseLeft}>
                  活動資訊
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" exact onClick={handleCloseLeft}>
                  購物商城
                </NavLink>
              </li>
              <li>
                <NavLink to="#/" exact onClick={handleCloseLeft}>
                  文章專欄
                </NavLink>
              </li>
              <li className="last_li">
                <NavLink to="#/" exact onClick={handleCloseLeft}>
                  關於我們
                </NavLink>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas show={showRight} onHide={handleCloseRight} placement="end">
          <Offcanvas.Header className="d-none">
            {/* li包的button是關閉canvas的按鈕 */}
            <li className="d-none">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </li>
            <li>
              <Link to="/cart" className="header_a">
                購物車
              </Link>
            </li>
            <li>
              <a href="#/" className="header_a">
                我的活動
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                我的收藏
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                帳戶設定
              </a>
            </li>
            <li>
              <a href="#/" className="header_a">
                變更密碼
              </a>
            </li>
            <li className="last_li">
              <a href="#/" className="header_a">
                我的訂單
              </a>
            </li>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas_right_menu">
            <ul className="right_offcanvas_body">
              <li>
                <Link to="/cart" onClick={handleCloseRight}>
                  購物車
                </Link>
              </li>
              <li>
                <Link to="#/" onClick={handleCloseRight}>
                  我的活動
                </Link>
              </li>
              <li>
                <Link to="#/" onClick={handleCloseRight}>
                  我的收藏
                </Link>
              </li>
              <li>
                <Link to="/member" onClick={handleCloseRight}>
                  帳戶設定
                </Link>
              </li>
              <li>
                <Link to="/pwdchanging" onClick={handleCloseRight}>
                  變更密碼
                </Link>
              </li>
              <li>
                <Link to="#/" onClick={handleCloseRight}>
                  我的訂單
                </Link>
              </li>
              <li className="last_li">
                <Link to="#/" onClick={handleCloseRight}>
                  優惠券
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        {/* offcanvas套件結束 */}
      </header>
    </>
  );
}

export default Header;
