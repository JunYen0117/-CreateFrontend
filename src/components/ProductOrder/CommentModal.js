import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import CommentItem from './CommentItem';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

function CommentModal(props) {
  const { detail, comment, orderId } = props;
  const { commentList, setCommentList } = props;
  const [show, setShow] = useState(false);
  // console.log('detail', detail);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // 加到資料庫
  const addComment = async () => {
    console.log(commentList);
    try {
      let response = await axios.post(
        `${API_URL}/comment/product/add`,
        commentList
      );
      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect(() => {
   
  // }, [comment]);

  return (
    <>
      {comment.length === 0 ? (
        <button
          className=" orderlist-b2 px-3 py-2 mt-2 mb-2"
          onClick={handleShow}
        >
          去評論
        </button>
      ) : (
        <button
          className=" orderlist-b2 px-3 py-2 mt-2 mb-2 comment_button"
          disabled
        >
          已評論
        </button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="comment_title">撰寫評論</div>
        </Modal.Header>
        {detail.map((v, i) => {
          return (
            <CommentItem
              key={i}
              productId={v.product_id}
              image={v.image}
              product_name={v.product_name}
              subtotal={v.subtotal}
              commentList={commentList}
              setCommentList={setCommentList}
              detail={detail}
              orderId={orderId}
            />
          );
        })}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addComment();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: '評論成功',
                showConfirmButton: false,
                timer: 1500,
              });
            }}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentModal;
