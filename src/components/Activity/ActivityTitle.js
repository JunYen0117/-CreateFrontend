const ActivityTitle = (props) => {
  const { state, setState } = props;
  return (
    <>
      <h1 className=" ac_title">我的活動</h1>
      <div className="border-bottom w-100 my-3">
        <a
          href="#/"
          className="me-5"
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          已報名
        </a>
        <a
          href="#/"
          className="me-5"
          onClick={(e) => {
            e.preventDefault();
            setState(2);
          }}
        >
          已取消
        </a>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            setState(0);
          }}
        >
          已結束
        </a>
      </div>
    </>
  );
};

export default ActivityTitle;
