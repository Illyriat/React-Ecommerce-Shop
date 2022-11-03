// Made with Sara for a course Lab. We had fun. 

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Basket from "../Components/Basket";
import Button from "../Components/Button";
import ErrorPage from "../Components/ErrorPage";
import Header from "../Components/Header";
import Home from "../Components/Home";
import MicList from "../Components/MicList";
import NavBar from "../Components/NavBar";

const MicrophoneContainer = () => {
    
    const [user, setUser] = useState({
        name: "James"
    });
    const [items, setItems] = useState([
        {name: "SM58"},
        {name: "P5"},
    ]);
    const [basket, setBasket] = useState([]);

    function addToBasketClickity(mic) { 
        // const chosenItem = items.find(item => item === ) 
        const userBasket = [...basket, mic]
        setBasket(userBasket);
    }

    function removeItem(item) {
        const userBasket = [...basket];
        const index = userBasket.indexOf(item);
        userBasket.splice(index, 1)
        setBasket(userBasket);
    }
    
    
    return ( 
        <>
            <Header text="Microphone Sales"/>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={< Home />} />
                    <Route path="/items" element={< MicList items={items} basket={basket} addToBasketClickity={addToBasketClickity}/>} />
                    <Route path="/basket" element={< Basket basket={basket} items={items} user={user} removeItem={removeItem} />} />
                    <Route path="*" element={< ErrorPage />} />
                </Routes>
            </Router>
        </>
     );
}
 
export default MicrophoneContainer;