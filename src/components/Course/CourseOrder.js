import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineUndo,
} from 'react-icons/ai';

function CourseOrder() {
  return (
    <>
      <div className="course-order mx-2">
        <div className="row">
          <div className="col">
            <h2>時間 10:00-11:00</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">當日剩餘2位</div>
        </div>
        <div className="row">
          <div className="col">項目</div>
          <div className="col text-end">
            <a
              href="#/"
              className="text-decoration-none icon"
              style={{ color: '#903f23' }}
              onClick={() => {}}
            >
              <AiOutlineUndo />
            </a>
            <a
              href="#/"
              className="text-decoration-none "
              style={{ color: '#903f23' }}
              onClick={() => {}}
            >
              重選
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-4">花草香氛蠟燭</div>
          <div className="col-4 per">NT680/每人</div>
          <div className="col-4 text-end">
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlineMinusCircle />
            </a>
            <a
              href="#/"
              className="text-decoration-none mx-4 tatol"
              style={{ color: 'black' }}
            >
              0
            </a>
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlinePlusCircle />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-4">花草香氛蠟燭</div>
          <div className="col-4 per">NT680/每人</div>
          <div className="col-4 text-end">
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlineMinusCircle />
            </a>
            <a
              href="#/"
              className="text-decoration-none mx-4 tatol"
              style={{ color: 'black' }}
            >
              0
            </a>
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlinePlusCircle />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-4">花草香氛蠟燭</div>
          <div className="col-4 per">NT680/每人</div>
          <div className="col-4 text-end">
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlineMinusCircle />
            </a>
            <a
              href="#/"
              className="text-decoration-none mx-4 tatol"
              style={{ color: 'black' }}
            >
              0
            </a>
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlinePlusCircle />
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="text-end">
          <div className="total-price my-2">
            總金額 <span>NT600</span>
          </div>
          <button className="my-4">立即購買</button>
        </div>
      </div>
    </>
  );
}

export default CourseOrder;
