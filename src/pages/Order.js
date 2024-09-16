import React from 'react';
import Sidebar from '../components/Sidebar';
import ListFinish from '../components/ProductOrder/ListFinish';
import ListCancel from '../components/ProductOrder/ListCancel';
import ListNotShipped from '../components/ProductOrder/ListNotShipped';
import { useState } from 'react';
import { Tab, Col, Nav, Row } from 'react-bootstrap';
import 'antd/dist/antd.css';
import ListShipped from '../components/ProductOrder/ListShipped';

const Order = () => {
  const [orderStatus, setOrderStatus] = useState(2);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="notshipped">
        <Row className="">
          <div className="col-3 d-flex justify-content-center mt-4">
            <Sidebar />
          </div>
          <Col sm={8}>
            <h1 className="Fl_title  ">我的訂單</h1>
            <Nav className="Fl_nav" defaultActiveKey="notshipped">
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link
                  className="Fl_btn h3  "
                  eventKey="notshipped"
                  onClick={() => setOrderStatus(2)}
                >
                  未出貨
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="  Fl_item mt-3 ">
                <Nav.Link className="Fl_btn h3" eventKey="shipped">
                  已出貨
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link
                  className="Fl_btn h3"
                  eventKey="finish"
                  onClick={() => setOrderStatus(1)}
                >
                  已完成
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link
                  className=" Fl_btn h3"
                  eventKey="cancel"
                  onClick={() => setOrderStatus(0)}
                >
                  已取消
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Col sm={12}>
              <Tab.Content className="mb-5 row mt-3">
                <Tab.Pane eventKey="notshipped">
                  <ListNotShipped />
                </Tab.Pane>
                <Tab.Pane eventKey="shipped">
                  <ListShipped />
                </Tab.Pane>
                <Tab.Pane eventKey="finish">
                  <ListFinish orderStatus={orderStatus} />
                </Tab.Pane>
                <Tab.Pane eventKey="cancel">
                  <ListCancel orderStatus={orderStatus} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Order;
