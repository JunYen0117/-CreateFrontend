import Section5FlexItem from './Section5FlexItem';

function Section5() {
  const section5Flex = [1, 2, 3];
  return (
    <>
      <section className="planning_section_five py-5">
        <div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E6%89%8B%E5%B7%A5%E6%9C%A8%E8%B3%AA%E9%8B%BC%E7%AD%86-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>手工木質鋼筆</h4>
              <p className="brand">品牌: 紅樹果</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E5%8A%9F%E8%83%BD%E6%80%A7%E4%BE%BF%E5%88%A9%E8%B2%BC-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>功能性便利貼</h4>
              <p className="brand">品牌: 綠界</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E5%8C%97%E6%AD%90%E8%B6%85%E8%96%84%E5%BF%AB%E5%85%85%E8%A1%8C%E5%8B%95%E9%9B%BB%E6%BA%90-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>北歐超薄快充行動電源</h4>
              <p className="brand">品牌: 黃連</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E7%BE%8A%E6%AF%9B%E6%B0%88%E9%9B%B6%E9%8C%A2%E5%8C%85-2.jpg"
                  alt="#/"
                />
              </figure>
              <h4>羊毛氈零錢包</h4>
              <p className="brand">品牌: 紅樹果</p>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E8%BB%8D%E7%B6%A0%E9%98%B2%E6%BD%91%E9%98%B2%E7%9B%9C%E5%BE%8C%E8%83%8C%E5%8C%85-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>軍綠防潑防盜後背包</h4>
              <p className="brand">品牌: 紅樹果</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E8%83%A1%E6%A1%83%E6%9C%A8%E7%9A%84iphone%E5%85%85%E9%9B%BB%E5%99%A8-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>胡桃木的iphone充電器</h4>
              <p className="brand">品牌: 紫電</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E8%B6%85%E5%A4%A7%E7%9A%AE%E9%9D%A9%E8%BB%9F%E6%9C%A8%E6%A1%8C%E5%A2%8A-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>超大皮革軟木桌墊</h4>
              <p className="brand">品牌: 紅樹果</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E7%BE%A9%E5%A4%A7%E5%88%A9%E7%BE%8A%E7%9A%AE%E6%8B%89%E9%8D%8A%E9%95%B7%E5%A4%BE-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>義大利羊皮拉鍊長夾</h4>
              <p className="brand">品牌: 藍天</p>
            </div>
          </div>

{/* 還沒做完 */}
          <div className="d-flex flex-wrap justify-content-center">
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E9%81%99%E9%81%99%E5%B0%8F%E7%8C%B4%E4%BA%94%E4%BB%B6%E7%B5%84-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>遙遙小猴五件組</h4>
              <p className="brand">品牌: 澄多</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E8%A0%9F%E7%AD%86%E5%B0%8F%E6%96%B0%E8%87%AA%E5%8B%95%E6%A9%A1%E7%9A%AE%E6%93%A6%E7%AD%86-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>蠟筆小新自動橡皮擦筆</h4>
              <p className="brand">品牌: 黃連</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E7%B6%93%E5%85%B8%E6%A2%9D%E7%B4%8B%E5%B0%8F%E9%BC%A0%E5%93%A5%E5%93%A5%E5%90%AB%E7%81%AB%E6%9F%B4%E7%9B%92-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>經典條紋小鼠哥哥含火柴盒</h4>
              <p className="brand">品牌: 澄多</p>
            </div>
            <div className="section5_flex_item mx-1 mx-md-2 mb-3">
              <figure>
                <img
                  src="http://localhost:3003/images/product/%E6%BB%BE%E8%BC%AA%E5%BC%8F%E6%95%B8%E5%AD%B8%E8%A8%88%E7%AE%97%E8%BC%94%E5%8A%A9%E6%95%99%E5%85%B7-1.jpg"
                  alt="#/"
                />
              </figure>
              <h4>滾輪式數學計算輔助教具</h4>
              <p className="brand">品牌: 紅樹果</p>
            </div>
          </div>

          <button className="d-flex justify-content-center mb-3">
            逛更多〖畢業禮物〗
          </button>
        </div>
      </section>
    </>
  );
}

export default Section5;
