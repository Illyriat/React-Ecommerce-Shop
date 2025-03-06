import React from "react";
import Button from "../Components/Button.js";
import Header from "./Header.js";
import styled from "styled-components";

// Shared container width and styling (Matches Basket)
const Container = styled.div`
  border: 2px solid #ccc;
  padding: 1.5em;
  border-radius: 8px;
  max-width: 500px; /* Set same width as Basket */
  margin: auto;
  background: #f9f9f9;
`;

// Individual microphone item container
const MicItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  margin: 0.5em 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

// Container for microphone list
const MicListContainer = styled.div`
  margin-top: 1em;
`;

// Styled text for microphone name (Matches Basket text size)
const MicText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;

const MicList = ({ items, addToBasketClickity }) => {
  function handlerBasket(evt) {
    const index = evt.target.value;
    addToBasketClickity(items[index]);
  }

  return (
    <Container>
      <Header text="Microphone List:" />
      <MicListContainer>
        {items.map((item, index) => (
          <MicItem key={index}>
            <MicText>{item.name}</MicText>
            <Button text="Add to Basket" value={index} clickHandler={handlerBasket} />
          </MicItem>
        ))}
      </MicListContainer>
    </Container>
  );
};

export default MicList;
