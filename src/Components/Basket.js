import React from "react";
import Header from "./Header";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
    border: solid;
    padding: 1em;
    display: block;
    align-content: center;
    `

const Basket = ({user, basket, removeItem}) => {
    const basketItems = basket.map((items)=> {
        return (
            <>
            <p>{items.name}</p>
            <Button text="Delete from basket" clickHandler={removeItem}/>
            </>
        )
    })


    return ( 
        <Container>
            <Header text="Basket"/>
                <p>Hi {user.name} you have placed items into the basket:</p>
                <h3>{basketItems}</h3>
        </Container>
     );
}
 
export default Basket;