import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getData } from '../../api'
import Teletubbie from '../../components/Teletubbie'
import { TELETUBBIE_SIZE } from "utils/constants";
const Teletubbies = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data =>
            setData(data))
    const [postNumber, setPostNumber] =useState(0);

    function handleScroll(){
        const isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
        if(isAtBottom){
            setPostNumber(postNumber + TELETUBBIE_SIZE);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        getData().then(data =>
            setData(data))
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <Container maxwidth="md">
            <Typography variant="h2" >
                Teletubbies
            </Typography>
            {
                data.slice(0, TELETUBBIE_SIZE).map((item, key) => {
                data.slice(0, TELETUBBIE_SIZE + postNumber).map((item, key) => {
                    return (
                        <Teletubbie
                            dir={key % 2}
                            key={`teletubbie_${key}`}
                            image_url={item.image_url}
                            name={item.name}
                            description={item.description}
                            traits={item.traits} />
                    )
                })
            }
        </Container>
    )
};

export default Teletubbies;
