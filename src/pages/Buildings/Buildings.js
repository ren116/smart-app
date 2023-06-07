import axios from "axios";
import React, { useState, useEffect } from "react";

const Buildings = () => {

    const[buildings, setBuildings] = useState([]);

    useEffect(() => {
        const fectchBuildings = async () => {
            const res = await axios.get('./buildings.json');
            setBuildings(res.data.buildings);
        };
        fectchBuildings();
    }, []);

    useEffect(() => {
    console.log(buildings);
        
    }, [buildings])

    return (
        <h1>Buildings</h1>
    )
}

export default Buildings;