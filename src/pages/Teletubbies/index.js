import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getData } from '../../api'
import Teletubbie from '../../components/Teletubbie'

const Teletubbies = () => {

    const [data, setData] = useState([]);
    const [postNumber, setPostNumber] =useState(0);

    function handleScroll(){
        const isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
        if(isAtBottom){
            setPostNumber(postNumber + 20);
        }
    }
    window.addEventListener("scroll",handleScroll);

    useEffect(() => {
        getData().then(data =>
            setData(data))
    }, [])

    return (
        <Container maxwidth="md">
            <Typography variant="h2" >
                Teletubbies
            </Typography>
            {
                data.slice(0, 20 + postNumber).map((item, key) => {
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
