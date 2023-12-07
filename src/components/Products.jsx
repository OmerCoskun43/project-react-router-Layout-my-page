// import axios from "axios";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
  const navigate = useNavigate();
  console.log(products);
  return (
    <>
      <h1 className="products_page_h">Our Products List</h1>
      <div className="products_page">
        {products?.map((product) => {
          return (
            <div
              onClick={() => navigate(`${product?.id}`)}
              key={product.id}
              className="d-flex gap-2 justify-content-start align-items-center products_page__div "
            >
              <h3> {product.id}) </h3>
              <p className="fw-bold"> {product.title} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
