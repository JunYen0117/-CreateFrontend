import ScrollspyNav from 'react-scrollspy-nav';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Sidebar() {
  return (
    <>
      <div className="coure-sidebar">
        <ScrollspyNav
          scrollTargetIds={[
            'course-intro',
            'course-note',
            'course-des',
            'course-buy',
          ]}
          offset={0}
          activeNavClass="is-active"
          scrollDuration="100"
          headerBackground="true"
        >
          <ul className="nav flex-column d-flex justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end active"
                href="#course-intro"
              >
                課程介紹
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#course-des"
              >
                課程說明
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#course-note"
              >
                購買須知
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#course-buy"
              >
                商品購買
              </a>
            </li>
          </ul>
        </ScrollspyNav>
        {/* <ul className="nav flex-column d-flex justify-content-center">
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#course-intro"
            >
              課程介紹
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#course-des"
            >
              課程說明
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#course-note"
            >
              購買須知
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#course-buy"
            >
              商品購買
            </AnchorLink>
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default Sidebar;

{
  /* <ScrollspyNav
          scrollTargetIds={[
            'course-intro',
            'course-note',
            'course-des',
            'course-buy',
          ]}
          offset={100}
          activeNavClass="is-active"
          scrollDuration="1000"
          headerBackground="true"
        >
        <ul className="nav flex-column d-flex justify-content-center">
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#course-intro">
              課程介紹
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#course-des">
              課程說明
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#course-note">
              購買須知
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#course-buy">
              商品購買
            </a>
          </li>
        </ul>
          </ScrollspyNav> */
}

// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-scrollspy-nav
// https://www.npmjs.com/package/react-scrollspy-navigation
// https://www.npmjs.com/package/react-scroll