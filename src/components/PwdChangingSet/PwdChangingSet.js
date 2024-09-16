import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { IconContext } from 'react-icons';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';

const PwdChangingSet = () => {
  const { user } = useLogin();

  const [password, setPassword] = useState({
    userID: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [signupPwdEye, setSignupPwdEye] = useState(false);
  const [pwdReveal, setPwdReveal] = useState('password');

  const [signupPwdEye2, setSignupPwdEye2] = useState(false);
  const [pwdReveal2, setPwdReveal2] = useState('password');

  const [signupPwdEye3, setSignupPwdEye3] = useState(false);
  const [pwdReveal3, setPwdReveal3] = useState('password');

  function handleChangePassword(e) {
    setPassword({
      ...password,
      userID: user.userID,
      [e.target.name]: e.target.value,
    });
  }

  async function handleUpdatePassword(e) {
    e.preventDefault();
    try {
      let response = await axios.post(
        API_URL + '/member/password/change',
        password
      );
      console.log(response);
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="pwdchanging container-fluid my-5">
        <h2 className="pwdchanging_title mb-5">變更密碼</h2>
        <div>
          <div>
            <Form>
              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="3">
                  舊密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  type={pwdReveal}
                  name="oldPassword"
                  onChange={handleChangePassword}
                />
                {/* 眼睛模組 */}
                <div
                  className="signup_eye"
                  onClick={() => {
                    setSignupPwdEye(!signupPwdEye);
                    pwdReveal === 'password'
                      ? setPwdReveal('text')
                      : setPwdReveal('password');
                  }}
                >
                  <IconContext.Provider
                    value={{ color: '#b99664', size: '35px' }}
                  >
                    {signupPwdEye === true ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </IconContext.Provider>
                </div>
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="3">
                  新密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  type={pwdReveal2}
                  name="newPassword"
                  onChange={handleChangePassword}
                />
                {/* 眼睛模組 */}
                <div
                  className="signup_eye2"
                  onClick={() => {
                    setSignupPwdEye2(!signupPwdEye2);
                    pwdReveal2 === 'password'
                      ? setPwdReveal2('text')
                      : setPwdReveal2('password');
                  }}
                >
                  <IconContext.Provider
                    value={{ color: '#b99664', size: '35px' }}
                  >
                    {signupPwdEye2 === true ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </IconContext.Provider>
                </div>
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-5"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="3">
                  確認新密碼
                </Form.Label>

                <Form.Control
                  className="pwdchanging_input"
                  type={pwdReveal3}
                  name="confirmNewPassword"
                  onChange={handleChangePassword}
                />
                {/* 眼睛模組 */}
                <div
                  className="signup_eye3"
                  onClick={() => {
                    setSignupPwdEye3(!signupPwdEye3);
                    pwdReveal3 === 'password'
                      ? setPwdReveal3('text')
                      : setPwdReveal3('password');
                  }}
                >
                  <IconContext.Provider
                    value={{ color: '#b99664', size: '35px' }}
                  >
                    {signupPwdEye3 === true ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </IconContext.Provider>
                </div>
              </Form.Group>

              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button
                  className="pwdchanging_update_btn mx-auto mx-md-0"
                  onClick={handleUpdatePassword}
                >
                  更新
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PwdChangingSet;
