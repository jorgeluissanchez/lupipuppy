import React from "react";
import {
  Card,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Product.css";

import AddCart from "./AddCart";

const Product = (product) => {
  return (
    <div>
      <Card className="m-2" key={product.id}>
        <Link to={"productInfo/" + product.id}>
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
            {product.description}...
          </Card.Text>
          <AddCart />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
