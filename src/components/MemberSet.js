import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL } from '../utils/config';
import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';
import { useLogin } from '../utils/useLogin';

function MemberSet() {
  const { isLogin } = useLogin();
  const [avatar, setAvatar] = useState('');
  const [member, setMember] = useState({
    id: '',
    account: '',
    member_name: '',
    phone: '',
    address: '',
    gender: '',
    age: '',
    avatar: '',
  });

  // 進入頁面時，取得會員資料
  useEffect(() => {
    getMemberInfo();
  }, []);

  function getCurrentMemberInfo() {
    return axios.get(API_URL + '/member/info', {
      withCredentials: true,
    });
  }

  const getMemberInfo = async () => {
    try {
      let response = await getCurrentMemberInfo();
      console.log(response.data); //從後台拿回前台，是session的資料
      setMember(response.data.customer); //把資料塞進狀態
      setAvatar(response.data.customer.avatar);
    } catch (e) {
      console.error('尚未登入');
    }
  };

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  function handleAvatar(e) {
    setMember({ ...member, avatar: e.target.files[0] });
  }

  function updateMemberInfo(formData) {
    return axios.post(`${API_URL}/member/edit/profile`, formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // 如果表單有圖片，會用 FormData 的方式來上傳
      let formData = new FormData();
      formData.append('id', member.id);
      formData.append('avatar', member.avatar);
      formData.append('member_name', member.member_name);
      formData.append('phone', member.phone);
      formData.append('address', member.address);
      formData.append('gender', member.gender);
      formData.append('age', member.age);

      let response = await updateMemberInfo(formData);
      getMemberInfo();
      // console.log(response);
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (e) {
      console.error(e);
    }
  }

  // console.log('member', member);

  // 如果沒有登入，則不顯示會員資料
  if (!isLogin) {
    return <></>;
  }

  return (
    <>
      <div className="memberset container-fluid my-5">
        <h2 className="memberset_title mb-3">帳戶設定</h2>

        <div>
          <div className="d-flex justify-content-center mb-4">
            <figure className="memberset_figure">
              <IconContext.Provider value={{ color: '#b99664', size: '150px' }}>
                {avatar ? (
                  <img
                    src={`http://localhost:3003/images${avatar}`}
                    alt=""
                    className="img-fluid"
                  ></img>
                ) : (
                  <FaUser className="memberset_figure_SVG mx-auto" />
                )}
              </IconContext.Provider>
            </figure>
          </div>
          <div>
            <Form>
              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formFile"
              >
                <Form.Label column sm="2">
                  修改頭像
                </Form.Label>

                <Form.Control
                  className="member_input"
                  type="file"
                  name="avatar"
                  onChange={handleAvatar}
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  帳號信箱
                </Form.Label>

                <Form.Control
                  type="text"
                  name="account"
                  value={member.account}
                  readOnly
                  placeholder="Email"
                  className="member_input"
                  disabled
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="2">
                  用戶名
                </Form.Label>

                <Form.Control
                  type="text"
                  name="member_name"
                  value={member.member_name}
                  className="member_input"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextTel"
              >
                <Form.Label column sm="2">
                  電話
                </Form.Label>

                <Form.Control
                  type="tel"
                  name="phone"
                  value={member.phone}
                  className="member_input"
                  placeholder="Tel"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-4"
                controlId="formPlaintextAddress"
              >
                <Form.Label column sm="2">
                  地址
                </Form.Label>

                <Form.Control
                  type="text"
                  name="address"
                  value={member.address}
                  className="member_input"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="d-block d-md-flex mb-4">
              <Form.Label column sm="2">
                  性別
                </Form.Label>
              <Form.Select
              id="gender"
              name="gender"
              value={member.gender}
              onChange={handleChange}
              className="gender_select mx-auto"
              aria-label="Default select example"
            >
              <option>請選擇性別</option>
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="不提供">不提供</option>
            </Form.Select>
              </Form.Group>

              <Form.Group
                className="d-block d-md-flex mb-5"
                controlId="formPlaintextAge"
              >
                <Form.Label column sm="2">
                  年齡
                </Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={member.age}
                  className="member_input member_birth"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center justify-content-md-end mb-5">
                <Button
                  className="member_update_btn mx-auto mx-md-0"
                  onClick={handleSubmit}
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
}

export default MemberSet;
