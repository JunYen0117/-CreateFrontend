import Carousel from 'react-bootstrap/Carousel';
function ExhibitionCarousel(props) {
  const { images } = props;

  return (
    <>
      <Carousel className="my-3">
        {images.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel_img"
                src={`http://localhost:3003/images/exhibition/${item.exhibition_img}`}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default ExhibitionCarousel;
