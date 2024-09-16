import GraduatePic from '../../img/themeplanning/GraduatePic.png';

function Section2() {
    return (
      <>
      <section className="planning_section_two pb-5 mb-5">
        <h3 className="py-4 mt-5">畢業季 • 出走派對 登場！</h3>
        <ul className="section2_flex d-flex">
          <figure className="section2_flex_item_left">
            <img src={GraduatePic} alt="" />
          </figure>
          <div className="section2_flex_item_right">
            <p className="py-4">
            《創意迴廊》是台灣的選物課程平台
              <br />
              提供手作課程、展覽
              <br />
              以及各樣選購商品
              <br />
              配件、包包、小物，各式各樣應有盡有！
              <br />
              <br />
              快來尋寶吧！
              <br />
              有獨特的想法想實踐，也歡迎聯絡我們！
            </p>
            <button className="d-flex justify-content-center mb-3">
              看更多
            </button>
          </div>
        </ul>
      </section>
      </>
    );
  }
  
  export default Section2;
  