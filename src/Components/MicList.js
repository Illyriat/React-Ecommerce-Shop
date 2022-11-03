import React from "react";
import Button from "../Components/Button.js";
import Header from "./Header.js";
import styled from "styled-components";

const MicList = ({items, addToBasketClickity}) => {

    const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 1em;
    `
    const Container = styled.div`
        border: solid;
    `

    function handlerBasket(evt) {
        const index = evt.target.value; 
        addToBasketClickity(items[index])
    }

    const Items = items.map((item, index) => {
        return (
            <ButtonContainer>
            <h2 key={index}>{item.name}</h2>
            <Button text="Add to Basket" value={index} clickHandler={handlerBasket}/>
            </ButtonContainer>
        )
    })

    return ( 
        <Container>
            <Header text="Microphone List:"/>
            {Items}
            
        </Container>
     );
}
 
export default MicList;