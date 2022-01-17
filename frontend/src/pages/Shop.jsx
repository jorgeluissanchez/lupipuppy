import React from 'react';

import Filter from "../components/Filter";
import Search from "../components/Search";
import ProductsList from "../components/ProductsList";

const Shop = () => {
  return (
    <div>
      <Search />
      <Filter />
      <ProductsList />
    </div>
  );
};

export default Shop;
