function Board(props) {
  const { element } = props;

  return (
    <>
      <div className="all-comment-board d-flex">
        <div className="board_avatar">
          <span className="board_comment_user">
            <img
              src={`http://localhost:3003/images${element.avatar}`}
              alt=""
              className=""
            />
          </span>
        </div>
        <div className="others-comment">
          <p className="mb-2">{element.member_name}</p>
          <p>{element.comment}</p>
        </div>
      </div>
    </>
  );
}

export default Board;
