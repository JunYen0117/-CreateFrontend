import Card from 'react-bootstrap/Card';
import Brand from './Brand';
function CarouselContents(props) {
  const res = props.datas.map((page_content, index) => {
    // console.log('page_content', page_content);
    const a = index === 0 ? 'active' : '';
    return (
      <div className={`carousel-item ${a}`} key={index}>
        <div className="all-logo d-flex justify-content-between">
          {page_content.map((content) => (
            <Brand key={content.id} {...content} />
          ))}
        </div>
      </div>
    );
  });
  return <>{res}</>;
}
export default CarouselContents;
