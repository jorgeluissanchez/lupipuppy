import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import AddCart from "../components/AddCart";

const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  console.log(product)
  useEffect(() => {
    const getUrl = () => {
      var actual = window.location + "";
      var split = actual.split("/");
      var id = split[split.length - 1];
      return id;
    };
    const id = getUrl();
    Axios({
      url: "http://localhost:4000/api/products/" + id,
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProduct]);
  return (
    <div>
      <Link to="../shop" className="btn btn-primary">
        Back
      </Link>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row>
            <Col md={6}>
              <img src={product.image} className="img-fluid" alt="..." />
            </Col>
            <Col md={6}>
              <Row>
                <Col sm={12} md={7}>
                  <h2>{product.name}</h2>
                  <span style={{ fontSize: "15px" }}>
                    <b>Brand:</b> <span>{product.brand}</span>
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>
                      {Array.from({ length: product.starts }).map((_, idx) => (
                        <i className="fa-xs fa fa-star card_star" />
                      ))}
                    </p>
                    <small style={{ fontSize: "20px" }}>Price:</small>
                    <p style={{ fontSize: "30px" }}>${product.price}</p>
                  </span>
                </Col>
                <Col sm={12} md={5}>
                  <p>Quantity:</p>
                  <AddCart />
                </Col>
              </Row>
              <Row className="justify-content">
                <Col>
                  <h3>Product Info</h3>
                  <Tabs defaultActiveKey="1" id="info" className="mb-3">
                    <Tab eventKey="1" title="Description">
                      {product.description}
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
