import Banner from '../../img/themeplanning/Banner.png';

function Section1() {
  return (
    <>
      <section className="planning_section_one container-fluid">
        <figure>
          <img src={Banner} alt="#/" />
        </figure>
        <div className="p-3">
          <p className="text">
            2022 畢業季將在 6 月到來，
            <br />
            想好送什麼畢業禮物給好友、老師或自己了嗎？
            <br />
            創意迴廊 超過上萬件送禮選擇，
            <br />
            客製化畢業禮物、畢業卡片、畢業花束、入職文具...
            <br />
            還有別出心裁的畢業禮物排行榜，給你滿滿的送禮靈感！
          </p>
        </div>
        <ul className="d-flex justify-content-center">
          <li>
            <a className="section1_menu_item p-3" href="#/">
              畢業禮物推薦
            </a>
          </li>
          <li>
            <a className="section1_menu_item p-3" href="#/">
              友誼回憶體驗
            </a>
          </li>
          <li>
            <a className="section1_menu_item p-3" href="#/">
              畢業專欄
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Section1;
