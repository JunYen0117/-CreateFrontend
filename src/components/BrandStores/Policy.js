import React from 'react';

function Policy() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-9 ">
            <h2 className="policy-title">退款換貨須知</h2>
            <p className="policy-text">
              若對商品有疑問，請在購買前向設計師提出。購買前詳盡地溝通，可省下退款/換貨所耗費的心力、金錢與時間。
              <br />
              <br />
              <b>退款申請須於收到商品後隔日起算 7 日內提出</b>
              <br />
              <br />
              若申請逾時或不符合 創藝迴廊
              退貨政策條件範圍，設計師有權拒絕退貨，請在提交申請前與商家溝通。
            </p>
            <br />
            <div className="policy-list">
              <p>
                <b>以下商品類型設計師不接受客人因個人因素申請退款</b>
              </p>
              <ul>
                <li>客製化商品</li>
                <li>已拆封個人衛生商品</li>
                <li>保存期限短的商品</li>
                <li>已拆封的影音商品</li>
              </ul>

              <p>
                <b>退款流程</b>
              </p>
              <ul>
                <li>設計師會在收到申請後的 1 個工作天內聯繫客人</li>
                <li>
                  設計師同意寄回後，請在 3
                  個工作天內，將完整的商品寄出，並以站內信告知設計師（請將使用物流單位及寄件編號一併附上，避免增加來回溝通的時間）
                </li>
                <li>
                  設計師在收到商品後的 1 個工作天內會確認商品狀態並完成退款程序
                </li>
              </ul>

              <p>
                <b>設計館提供換貨服務</b>
              </p>
              <ul>
                <li>如欲換貨請在收到商品後隔日起算 7 日內以站內信聯繫設計師</li>
                <li>
                  設計師會依據商品種類或庫存評估是否有換貨服務，請務必先以站內信詢問設計師
                </li>
                <li>當設計師同意換貨，請在 3 個工作天內，將完整的商品寄出</li>
                <li>
                  設計師在收到商品、確認商品狀態後，將於 1
                  個工作天將指定更換商品寄出
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
