import { React, useState } from 'react';
import BrandProductList from './BrandProductList';
import Policy from './Policy';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const TopBar = (props) => {
  const { brand } = props;

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="products">
        <Row className="topbar">
          <Col sm={12} className="bar">
            <Nav className="topbar_nav pt-4" defaultActiveKey="products">
              <Nav.Item className="mt-3">
                <Nav.Link className="topbar_btn" eventKey="products">
                  &emsp;&emsp;商品&emsp;&emsp;
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mt-3">
                <Nav.Link className="nav-item topbar_btn" eventKey="policy">
                  退換貨政策
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content className="mb-5">
              <Tab.Pane className="" eventKey="products">
                <BrandProductList brand={brand} />
              </Tab.Pane>
              <Tab.Pane eventKey="policy">
                <Policy />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default TopBar;
