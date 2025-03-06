import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavLinks = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.5em;
    background-color: #333;
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    padding: 0.5em 1em;

    &:hover {
        color: lightgray;
    }
`;

const NavBar = () => {
    return ( 
        <NavLinks>
            <li>
                <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
                <StyledLink to="/items">Microphones</StyledLink>
            </li>
            <li>
                <StyledLink to="/basket">Basket</StyledLink>
            </li>
        </NavLinks>
     );
}
 
export default NavBar;
