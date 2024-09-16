import Section9FlexItem from './Section9FlexItem';

function Section9() {
  return (
    <>
      <section className="planning_section_nine pb-5">
        <h3 className="py-4 mt-5">畢業感文分享</h3>
        <p className='mb-5'>
          專欄是分享觀點的起點。在創意迴廊上
          <br />
          作家除了傳達，同時也在接收
          <br />
          讀者與作家為了這個時代不斷更新自己
          <br />
          而想法的交換，才正是群眾共鳴的核心
        </p>
        <div className="d-flex justify-content-center">
          <Section9FlexItem />
        </div>
      </section>
    </>
  );
}

export default Section9;
