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
                <Link to="/items"><img src="imgs/microphone.png" alt="microphone" width="100"/></Link>
                <Link to="/basket"><img src="imgs/basket.png" alt="basket" width="100" /></Link>
            </ImageLinks>
        </>
     );
}
 
export default Home;