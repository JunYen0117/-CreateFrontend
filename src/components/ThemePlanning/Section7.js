import Section7FlexItem from './Section7FlexItem';
function Section7() {
  return (
    <>
      <section className="planning_section_seven pb-4">
        <h4 className="py-5 text-center">與同學最好的回憶</h4>
        <p className="pb-5">
          各種展覽內容的呈現，會在主軸的框架下
          <br />
          讓策展團隊、設計品牌、創作者
          <br />
          保有對主題最大程度的想像
          <br />
        </p>
        <div className="d-flex justify-content-center">
          <Section7FlexItem />
        </div>
        <button className="d-flex justify-content-center mt-4 mb-5">
          逛更多〖展覽資訊〗
        </button>
      </section>
    </>
  );
}

export default Section7;
