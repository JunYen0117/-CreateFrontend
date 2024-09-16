import { Accordion } from 'react-bootstrap';
import { ReactComponent as IGLogo } from '../img/footer/IGLogo.svg';
import { ReactComponent as FBLogo } from '../img/footer/FBLogo.svg';
import { ReactComponent as LineLogo } from '../img/footer/LineLogo.svg';
import Logo2 from '../img/footer/Logo2.svg';

function Footer(props) {
  if (window.location.href === 'http://localhost:3000/') {
    return <></>;
  }

  return (
    <>
      {/* 以下為桌機版畫面 */}
      <footer className="footer_desktop container-fluid d-none d-md-block text-white h4 row mx-0">
        <div className="container footer_all ms-5 col-11">
          {/* footer_up */}
          <ul className="footer_up_title d-flex pt-4 footer_top ms-5">
            <li>活動資訊</li>
            <li>幫助</li>
            <li>認識</li>
            <li className="small_item">社群</li>
          </ul>
          <ul className="footer_up_text d-flex py-4 footer_top ms-5">
            <li>
              <p>電話：03-400000</p>
              <p>地址：桃園市中壢區新生路二段421號</p>
              <p>信箱：color123@example.com</p>
            </li>
            <li>
              <p>
                <a href="#/" className="footer_a">
                  Q&A
                </a>
              </p>
              <p>
                <a href="#/" className="footer_a">
                  客服
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#/" className="footer_a">
                  關於迴廊
                </a>
              </p>
              <p>
                <a href="#/" className="footer_a">
                  Business
                </a>
              </p>
            </li>
            <li className="small_item d-flex">
              <div className="mx-2">
                <a href="#/" className="footer_a">
                  <IGLogo />
                </a>
              </div>
              <div className="mx-2">
                <a href="#/" className="footer_a">
                  <FBLogo />
                </a>
              </div>
              <div className="mx-2">
                <a href="#/" className="footer_a">
                  <LineLogo />
                </a>
              </div>
            </li>
          </ul>

          {/* footer_down */}
          <div className="footer_down d-flex justify-content-between mt-3 ms-5">
            <ul className="footer_down_left d-flex footer_top">
              <li className="me-2">
                <a href="#/" className="footer_a">
                  <img src={Logo2} alt="" />
                </a>
              </li>
              <li className="create_your_life align-self-center">
                Create your life
              </li>
            </ul>
            <ul className="footer_down_right d-flex pt-3 footer_top">
              <li className="ms-3">©2022</li>
              <li className="ms-3">
                <a href="#/" className="footer_a">
                  隱私權政策
                </a>
              </li>
              <li className="ms-3">
                <a href="#/" className="footer_a">
                  服務條款
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* 桌機版畫面結束 */}

      {/* 以下為手機版畫面 */}
      <footer className="footer_mobile d-flex flex-column d-md-none">
        {/* 以下為bootstrap accordion套件 */}
        <Accordion className="d-md-none">
          <Accordion.Item eventKey="0">
            <Accordion.Header>聯絡資訊</Accordion.Header>
            <Accordion.Body>
              <p>電話：03-400000</p>
              <p>地址：桃園市中壢區新生路二段421號</p>
              <p>信箱：color123@example.com</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>幫助</Accordion.Header>
            <Accordion.Body>
              <p>
                <a href="#/" className="footer_a">
                  Q&A
                </a>
              </p>
              <p>
                <a href="#/" className="footer_a">
                  客服
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>認識</Accordion.Header>
            <Accordion.Body>
              <p>
                <a href="#/" className="footer_a">
                  關於迴廊
                </a>
              </p>
              <p>
                <a href="#/" className="footer_a">
                  Business
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* bootstrap accordion套件結束 */}

        <div className="d-flex justify-content-center mt-3">
          <div className="mx-3">
            <a href="#/" className="footer_a">
              <IGLogo />
            </a>
          </div>
          <div className="mx-3">
            <a href="#/" className="footer_a">
              <FBLogo />
            </a>
          </div>
          <div className="mx-3">
            <a href="#/" className="footer_a">
              <LineLogo />
            </a>
          </div>
        </div>
        <div className="d-flex py-2">
          <p className="create_your_life mx-auto mt-2">Create your life.</p>
        </div>
        <div className="d-flex justify-content-center pb-2">
          <div className="copy_right mx-4">©2022</div>
          <div className="mx-4">
            <a href="#/" className="footer_a">
              隱私權政策
            </a>
          </div>
          <div className="mx-4">
            <a href="#/" className="footer_a">
              服務條款
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
