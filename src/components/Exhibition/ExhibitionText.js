function ExhibitionText(props) {
  const { exhibition } = props;
  return (
    <>
      {exhibition.map((item, index) => {
        return (
          <div key={item.id} className="exhibition-text">
            <h1 className="text-title my-4">{item.exhibition_name}</h1>
            <h1 className="my-4" id="exhibition-intro">
              展覽介紹
            </h1>
            <div
              className="text mx-4"
              dangerouslySetInnerHTML={{ __html: `${item.exhibition_intro}` }}
            ></div>
            <h1 className="my-4" id="exhibition-des">
              展覽說明
            </h1>
            <div
              className="text mx-4"
              dangerouslySetInnerHTML={{ __html: `${item.exhibition_des}` }}
            ></div>
            <h1 className="my-4" id="exhibition-note">
              購買須知
            </h1>
            <div
              className="text mx-4"
              dangerouslySetInnerHTML={{ __html: `${item.exhibition_notes}` }}
            ></div>
            <h1 className="my-4" id="exhibition-buy">
              商品購買
            </h1>
            <div className="text mx-4"></div>
          </div>
        );
      })}
    </>
  );
}
export default ExhibitionText;
