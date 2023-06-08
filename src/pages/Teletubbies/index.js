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
            {
                data.slice(0, 20).map((item, key) => {
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
