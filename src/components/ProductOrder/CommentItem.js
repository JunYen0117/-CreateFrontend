import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useLogin } from '../../utils/useLogin';

const CommentItem = (props) => {
  const { commentList, setCommentList } = props;
  const { productId, image, product_name, subtotal, detail, orderId } = props;
  // 初始值為1
  const [star, setStar] = useState(1);
  const { user } = useLogin();

  useEffect(() => {
    setCommentList(detail);
  }, [ ]);

  useEffect(() => {
    if (commentList.length === 0) return;
    handleChangeStar();
  }, [star]);

  function handleChangeStar() {
    const commentIndex = detail.findIndex(
      (item) => item.product_id === productId
    );

    let newList = [...commentList];

    newList[commentIndex] = {
      ...newList[commentIndex],
      star: star,
    };
    setCommentList(newList);
  }

  function handleOnChange(e) {
    const commentIndex = detail.findIndex(
      (item) => item.product_id === productId
    );

    let newList = [...commentList];

    newList[commentIndex] = {
      ...newList[commentIndex],
      order_id: orderId,
      customer_id: user.userID,
      star: star,
      comment: e.target.value,
    };

    setCommentList(newList);
  }

  // console.log('commentList', commentList);

  return (
    <Modal.Body>
      <div className="ms-1 mb-3 row">
        <div className="comment_img col-2 p-0">
          <img src={`http://localhost:3003/images/product/${image}`} alt="" />
        </div>
        <div className="col-3">{product_name}</div>
        <div className="col-3">NT ${subtotal}</div>
        <div className="col-3 ">
          {star >= 1 ? (
            <FaStar className="comment_star" onClick={() => setStar(1)} />
          ) : (
            <FaRegStar className="comment_star" onClick={() => setStar(1)} />
          )}
          {star >= 2 ? (
            <FaStar className="comment_star" onClick={() => setStar(2)} />
          ) : (
            <FaRegStar className="comment_star" onClick={() => setStar(2)} />
          )}
          {star >= 3 ? (
            <FaStar className="comment_star" onClick={() => setStar(3)} />
          ) : (
            <FaRegStar className="comment_star" onClick={() => setStar(3)} />
          )}
          {star >= 4 ? (
            <FaStar className="comment_star" onClick={() => setStar(4)} />
          ) : (
            <FaRegStar className="comment_star" onClick={() => setStar(4)} />
          )}
          {star >= 5 ? (
            <FaStar className="comment_star" onClick={() => setStar(5)} />
          ) : (
            <FaRegStar className="comment_star" onClick={() => setStar(5)} />
          )}
        </div>
      </div>
      <Form.Control
        as="textarea"
        rows={3}
        onChange={handleOnChange}
        placeholder="請輸入評論"
      />
    </Modal.Body>
  );
};

export default CommentItem;
