import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 1em;
  padding: 1em;
  margin: .5em;
  border: 2px solid silver; 
  &:hover {
    background: grey;
  }
  border-radius: 5px;        
`

const Button = ({text, clickHandler, value, isDisabled=false}) => {
    return ( 
        <ButtonStyle disabled={isDisabled} value={value} onClick={clickHandler}>
            {text}
        </ ButtonStyle>
     );
}
 
export default Button;