import React from "react";
import Header from "./Header";
import Button from "./Button";
import styled from "styled-components";

// Main basket container
const Container = styled.div`
    border: 2px solid #ccc;
    padding: 1.5em;
    border-radius: 8px;
    max-width: 500px;
    margin: auto;
    background: #f9f9f9;
`;

// Styled for each basket item
const BasketItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em;
    margin: 0.5em 0;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
`;

// Basket Items Container
const BasketList = styled.div`
    margin-top: 1em;
`;

// User Greeting Text
const UserText = styled.p`
    font-size: 1rem;
    font-weight: 500;
`;

const Basket = ({ user, basket, removeItem }) => {
    return ( 
        <Container>
            <Header text="Basket" />
            <UserText>Hi {user.name}, you have placed the following items in your basket:</UserText>
            <BasketList>
                {basket.map((item, index) => (
                    <BasketItem key={index}>
                        <p>{item.name}</p>
                        <Button text="Delete from basket" clickHandler={() => removeItem(index)} />
                    </BasketItem>
                ))}
            </BasketList>
        </Container>
    );
}
 
export default Basket;
