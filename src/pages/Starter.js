import { useState } from 'react';

function Starter() {
  const [cssFlying1, setCssFlying1] = useState('noflying');
  const [cssFlying2, setCssFlying2] = useState('noflying');
  const [cssFlying3, setCssFlying3] = useState('noflying');
  const changeCss1 = () => {
    setCssFlying2('flying');
    setCssFlying3('flying');
  };
  const changeCss2 = () => {
    setCssFlying1('flying');
    setCssFlying3('flying');
  };
  const changeCss3 = () => {
    setCssFlying1('flying');
    setCssFlying2('flying');
  };

  return (
    <>
      <ul className="starter_flex d-flex flex-column flex-md-row">
        <li className={`starter_flex_item_left ${cssFlying1}`}>
          <div
            className="link"
            alt="#/"
            onClick={() => {
              changeCss1();
              setTimeout(() => {
                window.location.href = 'http://localhost:3000/exhibition';
              }, 1500);
            }}
            style={{ cursor: 'pointer' }}
          >
            <span className="text">逛展覽</span>
          </div>
        </li>
        <li className={`starter_flex_item_mid ${cssFlying2}`}>
          <div
            className="link"
            alt="#/"
            onClick={() => {
              changeCss2();
              setTimeout(() => {
                window.location.href = 'http://localhost:3000/product';
              }, 1500);
            }}
            style={{ cursor: 'pointer' }}
          >
            <span className="text">買禮物</span>
          </div>
        </li>
        <li className={`starter_flex_item_right ${cssFlying3}`}>
          <div
            className="link"
            href="/themeplanning"
            alt="#/"
            onClick={() => {
              changeCss3();
              setTimeout(() => {
                window.location.href = 'http://localhost:3000/ArtMagazine'; // <----這個會改寫路徑
              }, 1500);
            }}
            style={{ cursor: 'pointer' }}
          >
            <span className="text">藝文誌</span>
          </div>
        </li>
      </ul>
      <a href="/Front" className="starter_skip p-2" alt="#/">
        ＳＫＩＰ
      </a>
    </>
  );
}

export default Starter;
