import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageLinks = styled.div`
   display: flex;
   justify-content: space-evenly;
   padding: 7em;
   margin: 0;
   border: solid;
`

const Home = () => {
    return ( 
        <>
            <ImageLinks>
                <Link to="/items"><img src="microphone.jpeg" alt="microphone" width="200"/></Link>
                <Link to="/basket"><img src="basket.webp" alt="basket" width="250" /></Link>
            </ImageLinks>
        </>
     );
}
 
export default Home;