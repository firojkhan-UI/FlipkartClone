import React from "react";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

const Header = () => {
  return (
    <>
      <div style={{ background: "#2874f0",
          display: 'flex', justifyContent: 'space-between', padding: '8px', position: 'fixed', zIndex:'10',width: '100%' }}>
        <div
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "32px",
          }}
        >
          {" "}
         <i>Flipkart</i> 
          <p style={{fontWeight:'700',fontSize: '16px', color:'yellow', margin: 'unset'}}>Plus</p>
        </div>
        <SearchBar />
        <Cart />
      </div>
    </>
  );
};

export default Header;
