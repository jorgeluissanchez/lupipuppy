import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";

import Product from "../components/Product";
import axios from "axios";

const CreateProduct = () => {
  const [product, setDatos] = useState({
    name: "",
    image: "",
    price: "",
    starts: "",
    description: "",
    category: "",
    brand: "",
  });

  const handleInputChange = (e) => {
    setDatos({
      ...product,
      [e.target.name]: e.target.value,
      [e.target.image]: e.target.value,
      [e.target.price]: e.target.value,
      [e.target.starts]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.brand]: e.target.value,
      [e.target.category]: e.target.value,
    });
  };
  const createProduct = async () => {
    axios
      .post("http://localhost:4000/api/products", {
        name: product.name,
        image: product.image,
        price: product.price,
        starts: product.starts,
        description: product.description,
        brand: product.brand,
        category: product.category,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Link to="../shop" className="btn btn-primary">
        Back
      </Link>
      <Row className="justify-content-center">
        <Row>
          <Col md={6}>
            <Product
              name={product.name}
              category={product.category}
              image={product.image}
              starts={product.starts}
              price={product.price}
              description={product.description.substring(0, 50)}
            />
          </Col>
          <Col md={6}>
            <h1>
              Product <span className="text-muted">Creator</span>
            </h1>
            <Form onSubmit={createProduct}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleInputChange}
                  name="name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Category"
                  onChange={handleInputChange}
                  name="category"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Brand"
                  onChange={handleInputChange}
                  name="brand"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleInputChange}
                  name="description"
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleInputChange}
                  name="price"
                  placeholder="Price"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Starts</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleInputChange}
                  name="starts"
                  placeholder="Starts"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>URL Image</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleInputChange}
                  name="image"
                  placeholder="URL Image"
                />
              </Form.Group>
              <Button variant="primary w-100" type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default CreateProduct;
