import ScrollspyNav from 'react-scrollspy-nav';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
function ExhibitionSidebar() {
  return (
    <>
      <div className="exhibition-sidebar">
        <ScrollspyNav
          scrollTargetIds={[
            'exhibition-intro',
            'exhibition-note',
            'exhibition-des',
            'exhibition-buy',
          ]}
          offset={-200}
          activeNavClass="is-active"
          scrollDuration="100"
        >
          <ul className="nav flex-column d-flex justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end "
                href="#exhibition-intro"
              >
                展覽介紹
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#exhibition-des"
              >
                展覽說明
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#exhibition-note"
              >
                購買須知
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#exhibition-buy"
              >
                商品購買
              </a>
            </li>
          </ul>
        </ScrollspyNav>
      </div>
    </>
  );
}

export default ExhibitionSidebar;

