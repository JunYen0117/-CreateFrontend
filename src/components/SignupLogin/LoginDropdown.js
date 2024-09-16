import { ReactComponent as NoLogin } from '../../img/header/nologin.svg';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


import { useLogin } from '../../utils/useLogin';

function LoginDropdown() {
  //傳入登入狀態，從App.js -> Header.js -> LoginDropdown.js
  const { setIsLogin } = useLogin();

  //dorpdown開關，讓.header_dropdown_menu會不會顯示出來？
  const [showDropdown, setShowDropdown] = useState('d-none');
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const logout = await axios.get(API_URL + '/auth/logout', {
        withCredentials: true,
      });
      // console.log('logout:', logout);
      setShowDropdown('d-none');
      setIsLogin(false);
      Swal.fire({
        icon: 'success',
        title: '已登出',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error(e);
    }
    // 如果在會員中心、購物車按登出，就要跳到首頁
    if (
      window.location.href === 'http://localhost:3000/activity' ||
      window.location.href === 'http://localhost:3000/fav' ||
      window.location.href === 'http://localhost:3000/member' ||
      window.location.href === 'http://localhost:3000/pwdchanging' ||
      window.location.href === 'http://localhost:3000/order' ||
      window.location.href === 'http://localhost:3000/coupon' ||
      window.location.href === 'http://localhost:3000/cart'
    ) {
      history.push('/Front');
    }
  };

  return (
    <>
      <div>
        <div
          onClick={() => {
            showDropdown === 'd-none'
              ? setShowDropdown('d-block')
              : setShowDropdown('d-none');
          }}
          style={{ cursor: 'pointer' }}
        >
          <NoLogin />
        </div>

        <div className={`header_dropdown_menu ${showDropdown}`}>
          <ul>
            <li>
              <Link
                to="/activity"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                我的活動
              </Link>
            </li>
            <li>
              <Link
                to="/fav"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                我的收藏
              </Link>
            </li>
            <li>
              <Link
                to="/member"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                帳戶設定
              </Link>
            </li>
            <li>
              <Link
                to="/pwdchanging"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                變更密碼
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                我的訂單
              </Link>
            </li>
            <li>
              <Link
                to="/coupon"
                className="p-2 text-center"
                onClick={() => {
                  setShowDropdown('d-none');
                }}
              >
                優惠券
              </Link>
            </li>
            <li>
              <div
                className="logout p-2 text-center cursor_pointer"
                onClick={handleLogout}
              >
                登出
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginDropdown;
// aaaa
