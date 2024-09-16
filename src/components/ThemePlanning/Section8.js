import Section8FlexItem from './Section8FlexItem';

function Section8() {
  return (
    <>
      <section className="planning_section_eight">
        <h4 className="py-5 text-center">畢業後充實自己</h4>
        <p className="pb-5">
          帶你深入探索有趣又獨特的行程
          <br />
          風格手作體驗活動
          <br />
          讓你輕鬆將儀式感帶入日常生活
        </p>
        <div className="d-flex justify-content-center">
          <Section8FlexItem />
        </div>
        <button className="d-flex justify-content-center mt-4 mb-5">
          逛更多〖專屬活動〗
        </button>
      </section>
    </>
  );
}

export default Section8;
