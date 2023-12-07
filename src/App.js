import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import axios from "axios";
import { useEffect, useState } from "react";
// import products from "./data";
import ProductsDetail from "./components/ProductsDetail";
import Footer from "./components/Footer";
function App() {
  const [products, setProducts] = useState("");
  // const [products, setProducts] = useState("");

  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products products={products} />} />
        <Route
          path="products/:id"
          element={<ProductsDetail products={products} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
