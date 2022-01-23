import React, { useEffect, useState } from "react";
import Axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Filter from "../components/Filter";
import Search from "../components/Search";
import Product from "../components/Product";

const Shop = () => {
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
      <Search />
      <Filter />

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 400: 1, 600: 2, 900: 4, 1200: 5, 1800: 6 }}
      >
        <Masonry>
          {product.map((product) => (
            <Product id={product._id} name={product.name} image={product.image} starts={product.starts} price={product.price} description={product.description.substring(0, 50)} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Shop;
