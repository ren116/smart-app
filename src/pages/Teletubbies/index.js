import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getData } from '../../api'
import Teletubbie from '../../components/Teletubbie'

const Teletubbies = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data =>
            setData(data))
    }, [])

    return (
        <Container maxwidth="md">
            <Typography variant="h2" >
                Teletubbies
            </Typography>
           
        </Container>
    )
};

export default Teletubbies;
