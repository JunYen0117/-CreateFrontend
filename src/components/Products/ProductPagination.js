import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function ProductPagination(props) {
  const { page, lastPage, setPage } = props;
  const [jump, setJump] = useState(null);

  const handleJumpPage = () => {
    if (jump < 1) {
      setPage(1);
    } else if (jump > lastPage) {
      setPage(lastPage);
    } else {
      setPage(Number(jump));
    }
  };

  const getPages = () => {
    // page 是當前所在頁面
    return (
      <>
        {page > 2 ? (
          <li className="page-item ms-3 my-2" onClick={() => setPage(page - 2)}>
            <a className="page-link" href="#/">
              {page - 2}
            </a>
          </li>
        ) : (
          ''
        )}
        {page > 1 ? (
          <li className="page-item ms-3 my-2" onClick={() => setPage(page - 1)}>
            <a className="page-link" href="#/">
              {page - 1}
            </a>
          </li>
        ) : (
          ''
        )}

        <li className="page-item ms-3 my-2 active">
          <a className="page-link" href="#/">
            {page}
          </a>
        </li>

        {page <= lastPage - 1 ? (
          <li className="page-item ms-3 my-2" onClick={() => setPage(page + 1)}>
            <a className="page-link" href="#/">
              {page + 1}
            </a>
          </li>
        ) : (
          ''
        )}

        {page <= lastPage - 2 ? (
          <li className="page-item ms-3 my-2" onClick={() => setPage(page + 2)}>
            <a className="page-link" href="#/">
              {page + 2}
            </a>
          </li>
        ) : (
          ''
        )}
      </>
    );
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination product_page justify-content-end align-items-center me-4 my-5 flex-wrap">
          {page > 1 ? (
            <li
              className="page-item my-2"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            >
              <a className="page-link" href="#/" aria-label="Previous">
                <AiOutlineLeft />
              </a>
            </li>
          ) : (
            ''
          )}
          {getPages()}
          {page === lastPage ? (
            ''
          ) : (
            <li
              className="page-item ms-3 my-2"
              onClick={() => {
                if (page < lastPage) {
                  setPage(page + 1);
                }
              }}
            >
              <a className="page-link" href="#/" aria-label="Next">
                <AiOutlineRight />
              </a>
            </li>
          )}
          <p className="h3 h-50 mb-0 mx-3">
            第{page}/{lastPage}頁
          </p>
          <div>
            <label>跳到第</label>
            <input
              type="text"
              className="mx-1 border border-secondary text-center"
              onChange={(e) => {
                setJump(e.target.value);
              }}
            />
            <label>頁</label>
          </div>
          <li>
            <span className="p-1 page_confirm ms-3" onClick={handleJumpPage}>
              確定
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ProductPagination;
