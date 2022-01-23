import React from "react";

import "../components/styles/Home.css";
import { Carousel, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="carousel-size">
            <img
              className="first-slide"
              src="https://m.media-amazon.com/images/S/abs-image-upload-na/a/AmazonStores/ATVPDKIKX0DER/706c5449275a52442394894ca3710630.w1500.h750.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-size">
          <div className="carousel-size">
            <img
              className="second-slide"
              src="https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/p960x960/217622345_123392193327869_914807148890239799_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=OOivikZr-A4AX-sj99W&_nc_ht=scontent.feoh1-1.fna&oh=00_AT9WE_JMxqSNI60wRYMYanhfAvGXcc7ukFMdU0NaMBq0-g&oe=61EA7172"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-size">
          <div className="carousel-size">
            <img
              className="third-slide"
              src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/7/AmazonStores/ATVPDKIKX0DER/38cc636d81b8d54f2fffbd793891323c.w1500.h750.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <Row className="mt-5 mb-5 text-center justify-content-center">
        <Row>
          <Col md={7} className="order-md-2 ">
            <h1>
              More About <span className="text-muted">LupiPuppy</span>
            </h1>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </Col>
          <Col md={5} className="order-md-1">
            <img
              src="https://www.maynevets.co.uk/wp-content/uploads/2018/08/dog-collapse.jpg"
              alt="img"
              className="w-auto"
            />
          </Col>
        </Row>
      </Row>
        <h1 className="text-center mb-5 mt-5">
          Services
        </h1>
      <Row xs={1} sm={3} md={4} className="text-center" id="services">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div className="col-lg-4 mb-3">
            <img
              className="rounded-circle"
              src="https://www.dogalize.com/wp-content/uploads/2017/03/service-dog-2098366_640-200x200.jpg"
              alt="img"
              width="200"
              height="200"
            />
            <h2>Service Name</h2>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Home;
