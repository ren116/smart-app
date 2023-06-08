import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getData } from '../../api'

const Teletubbies = () => {

    useEffect(() => {
        getData().then(data =>
            console.log(data))
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
