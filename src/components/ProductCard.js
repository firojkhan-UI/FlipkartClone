import React from "react";
import styled from "styled-components";

const WrapperCard = styled.div`
    max-width: 200px;
    max-height: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 16px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: #f8f9fa;
  }
`

const Title = styled.div`
    color: #878787;
    font-size: 14px;
    font-weight: 500;
`

const Price = styled.div`
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: #212121;
}
`

const ProductCard = ({image, price, title}) => {
    return(<>
    <WrapperCard>
        <div>
        <img src={image} style={{width: '100%'}} />
        </div>
        <Title>{title}</Title>
        <div>₹{price}</div>
        <Price>ADD to Cart</Price>
    </WrapperCard>
    </>)
}
export default ProductCard;