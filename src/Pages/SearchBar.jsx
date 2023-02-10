import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./style.css";
const SearchBar = () => {
  return (
    <>
      <div className="container">
        <Row className="py-3">
          <Col>
            <Button className="buttons btn btn-primary p-3 px-4">Open <br /> Orders</Button>
          </Col>
          <Col>
            <Button className="buttons btn btn-primary p-3  px-4 ">Short  Quantity <br /> Orders</Button>
          </Col>
          <Col>
            <Button className="buttons btn btn-primary  p-3  px-4">
              Trucker Requested <br /> Orders
            </Button>
          </Col>

          <Col>
            <Button className="buttons btn btn-primary p-3  px-4">Dispatched <br /> Orders</Button>
          </Col>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 pl-2"
                aria-label="Search"
                style={{ width: "250px" }}
              />
            </Form>
            
          </Col>
          <Col>  <Button className="buttons btn btn-primary">
            Search
            </Button></Col>
        </Row>
      </div>
    </>
  );
};

export default SearchBar;
