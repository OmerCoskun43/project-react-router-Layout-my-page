import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(params);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(data);
    };
    getProduct();
  }, [id]);

  // console.log(product);

  const handleNext = () => {
    product.id < products.length &&
      navigate(`/products/${Number(product?.id) + 1}`);
  };

  const handlePrev = () => {
    product.id > 1 && navigate(`/products/${Number(product?.id) - 1}`);
  };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown, true);
  // }, []);

  // function handleKeyDown(e) {
  //   console.log(e.keyCode);
  //   if (e.keyCode === 39) {
  //     handleNext();
  //   }
  //   if (e.keyCode === 37) {
  //     handlePrev();
  //   }
  // }

  return (
    <div className="product_page">
      <h1> {product?.category?.toUpperCase()} </h1>
      <h5> {product?.title} </h5>
      <img src={product?.image} alt={product.image} />
      <p> {product?.description} </p>
      <div className="product_prices">
        <h6>
          Price: <span>${product?.price} </span>{" "}
        </h6>
        <h6>
          {" "}
          Rate: <span>{product?.rating?.rate} </span> - Count:{" "}
          <span> {product?.rating?.count}</span>
        </h6>
      </div>
      <div className="product_page__buttons">
        <button onClick={handlePrev}> Previous Product </button>
        <button onClick={handleNext}> Next Product </button>
      </div>
    </div>
  );
};

export default ProductsDetail;
