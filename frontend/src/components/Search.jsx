import React from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import "./styles/Search.css";

const Search = () => {
  return (
    <div>
      <Row className="justify-content-sm-center">
        <Col sm={6}>
          <InputGroup className="mb-3" size="md">
            <FormControl
              placeholder="Search"
              aria-label="search"
              aria-describedby="search"
            />
            <Button variant="primary" id="search">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
