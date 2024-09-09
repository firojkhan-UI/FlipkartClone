import React, { useEffect, useState } from "react";
// import shopping_img from "../18775862.jpg";
import styled from "styled-components";
import searchIcon from "../search.png";

const SearchWrapper = styled.input`
  min-width: 600px;
  width: 100%;
  border: 0;
  outline: 0 none;
  font-size: 18px;
  padding: 16px;
  cursor: pointer;
`;

const SearchBar = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleSearchItem = (e) => {
    console.log(e.target.value,"target:::")
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <SearchWrapper onChange={handleSearchItem} placeholder="Serach for products and brands more" />
        </div>
        <div
          style={{
            width: "48px",
            position: "absolute",
            top: "10px",
            right: "0",
            margin: "auto",
          }}
        >
          <img style={{ width: "100%" }} src={searchIcon} alt="serch_icon" />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
