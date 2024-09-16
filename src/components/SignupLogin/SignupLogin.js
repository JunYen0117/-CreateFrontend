import { ReactComponent as NoLogin } from '../../img/header/nologin.svg';

import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoginBody from './LoginBody';
import SignupBody from './SignupBody';
import ForgottenPwdBody from './ForgottenPwdBody';

function SignupLogin() {
  //傳入登入狀態，從App.js -> Header.js -> SignupLogin.js

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [key, setKey] = useState('login');

  return (
    <>
      <NoLogin onClick={handleShow} style={{ cursor: 'pointer' }} />

      <Modal show={show} onHide={handleClose} className="LoginSignup">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="login_header d-flex"
        >
          <Tab eventKey="signup" title="註冊">
            <SignupBody />
          </Tab>
          <Tab eventKey="login" title="登入">
            <LoginBody />
          </Tab>
          <Tab eventKey="forgotten_pwd" title="忘記密碼">
            <ForgottenPwdBody />
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
}

export default SignupLogin;
