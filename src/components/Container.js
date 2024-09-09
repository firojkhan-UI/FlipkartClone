import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
const PRODUCT_API_URL = "https://fakestoreapi.com/products";

const Container = ({ handleSearch }) => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    (
        async () => {
            const response = await fetch(PRODUCT_API_URL)
            const data = await response.json()
            setList(data)
        }
    )()
  },[]);

  console.log(list, "list:::");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {list?.map((item, ind) => (
          <ProductCard
            image={item?.image}
            price={item?.price}
            title={item?.title}
          />
        ))}
      </div>
    </>
  );
};
export default Container;
