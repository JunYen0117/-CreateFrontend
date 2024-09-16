import graduation_2 from '../../img/themeplanning/graduation_2.jpg';
import graduation_3 from '../../img/themeplanning/graduation_3.jpg';

function Section9FlexItem() {
  return (
    <>
      <div className="section9_article_card m-1 mx-md-2">
        <figure>
          <img src={graduation_2} alt="#/" />
        </figure>
        <div className="span my-2">王丹/ </div>
        <div className="span my-2"> 送給畢業生的話</div>
      </div>
      
      <div className="section9_article_card m-1 mx-md-2">
        <figure>
          <img src={graduation_3} alt="#/" />
        </figure>
        <div className="span my-2">焦糖綠玫瑰/ </div>
        <div className="span my-2"> 畢業季斷捨離</div>
      </div>
    </>
  );
}

export default Section9FlexItem;
