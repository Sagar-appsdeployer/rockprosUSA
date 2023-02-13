import React from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import "./style.css";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
const SearchBar = () => {
  return (
    <>
      <div className="container ">
        <Row className="justify-content-end buttonGroupandSearch">
          <Col sm={6}>
            <ButtonToolbar
              className=" buttongroup"
              aria-label="Toolbar with Button groups"
            >
              <ButtonGroup className="m-3" aria-label="First group">
                <Button className="btn btn-primary mx-1">Open Orders</Button>{" "}
                <Button className="btn btn-primary mx-1">Short Quantity Orders</Button>{" "}
                <Button className="btn btn-primary mx-1">Truck Requested Orders</Button>{" "}
                <Button className="btn btn-primary mx-1">Dispatched Orders</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>

          <Col sm={3}>
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                placeholder="Search"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
              <InputGroup.Text id="btnGroupAddon2" className="btn btn-primary">
                Search
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        <Row className="DropdownAndSearch">
          <Col>
            <Dropdown className="dropdown m-3 ">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Buttons
              </Dropdown.Toggle>

              <Dropdown.Menu className="text-center">
                <Dropdown.Item>
                  <Button  className="btn btn-primary">Open Orders</Button>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button className="btn btn-primary">Short Quantity Orders</Button>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button className="btn btn-primary">Truck Requested Orders</Button>{" "}
                </Dropdown.Item>

                <Dropdown.Item>
                  <Button className="btn btn-primary">Dispatched Orders</Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col >
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                placeholder="Search"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              
              />
              <InputGroup.Text id="btnGroupAddon2" className="btn btn-primary">
                Search
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchBar;
