import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Card,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/ProductsList.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ProductsList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:4000/api/products",
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
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 600: 2, 900: 4, 1200: 5, 1800: 6 }}
        >
          <Masonry>
            {product.map((product) => (
              <Card className="m-2" key={product._id}>
                <Link to={"productInfo/" + product._id}>
                  <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <h5>
                      {product.name}
                      <Badge pill bg="secondary">
                        {product.category}
                      </Badge>
                    </h5>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    stars:{" "}
                    {Array.from({ length: product.starts }).map((_, idx) => (
                      <i className="fa-xs fa fa-star card_star" />
                    ))}{" "}
                    - price: ${product.price}
                  </Card.Subtitle>
                  <Card.Text>
                    description:
                    <br />
                    {product.description.substring(0, 50)}...
                  </Card.Text>
                  <Row>
                    <Col lg={12}>
                      <InputGroup className="mb-3">
                        <Button variant="primary">-</Button>
                        <FormControl
                          type="text"
                          placeholder="0"
                          className="text-center"
                          id="amount"
                        />
                        <Button variant="primary">+</Button>
                      </InputGroup>
                    </Col>
                    <Col lg={12}>
                      <Link to="/" className="btn btn-cart btn-primary">
                        Add To Cart
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
  );
};

export default ProductsList;
