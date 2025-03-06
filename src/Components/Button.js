import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 0.9rem;
  padding: 0.6em 1.2em;
  margin: 0.5em;
  border: 2px solid #ccc;
  background: white;
  color: #333;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #e0e0e0;
    color: #aaa;
    cursor: not-allowed;
    border-color: #ddd;
    box-shadow: none;
  }
`;

const Button = ({ text, clickHandler, value, isDisabled = false }) => {
  return (
    <ButtonStyle disabled={isDisabled} value={value} onClick={clickHandler}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
