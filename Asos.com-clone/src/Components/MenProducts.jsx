import React, { useEffect, useState } from "react";
import { menProducts } from "../../db";
import { Box, Select } from "@chakra-ui/react";
import ProductLoop from "./ProductLoop";
import { Link, useSearchParams } from "react-router-dom";
import FontSize from "../Chakra Components/FontSize";

const MenProducts = () => {
  let details = JSON.parse(localStorage.getItem("productDetails")) || {};
  const [products, setProducts] = useState(menProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Men's Clothes | Shop for Men's Fashion | ASOS";
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }

    const orderParam = searchParams.get("order");
    if (orderParam) {
      setSelectedOrder(orderParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategory === "") {
      setProducts(menProducts);
    } else {
      let filteredProducts = menProducts.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filteredProducts);
    }
  }, [selectedCategory, menProducts, setProducts]);

  useEffect(() => {
    if (selectedOrder === "") {
      setProducts(products);
    } else if (selectedOrder == "asc") {
      const lowToHigh = [...products].sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(lowToHigh);
    } else {
      const highToLow = [...products].sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(highToLow);
    }
  }, [selectedOrder, menProducts, setProducts]);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSearchParams(selectedValue === "" ? "" : { category: selectedValue });
  };

  const handleOrderChange = (event) => {
    const selectedValue = event.target.value;
    const categoryParam = searchParams.get("category");
    setSelectedOrder(selectedValue);
    setSearchParams(
      selectedValue == ""
        ? ""
        : categoryParam == null
        ? { sort: "price", order: selectedValue }
        : { category: categoryParam, sort: "price", order: selectedValue }
    );
  };

  const handleClick = (e) => {
    details = e;
    localStorage.setItem("details", JSON.stringify(details));
  };

  return (
    <>
      <Box mt={20}>
        <Box display={"flex"} justifyContent={"space-evenly"} mt={3}>
          <Box w="40%">
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              fontSize={FontSize}
            >
              <option value="">Sort based on Catrgories</option>
              <option value="shirt">Shirts</option>
              <option value="pant">Pants and Trousers</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
            </Select>
          </Box>
          <Box w="40%">
            <Select
              value={selectedOrder}
              onChange={handleOrderChange}
              fontSize={FontSize}
            >
              <option value="">Sort based on Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
          </Box>
        </Box>
        <Box
          display={"grid"}
          mt={10}
          gridTemplateColumns={{
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          sx={{
            "@media screen and (max-width: 767px)": {
              gridTemplateColumns: "repeat(2,1fr)",
            },
          }}
        >
          {products.map((e, i) => (
            <Link key={i} to={`/${e.title}`} onClick={() => handleClick(e)}>
              <ProductLoop e={e} i={i} />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default React.memo(MenProducts);
