import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'

const Telebubbie = (props) => {
    return (
        <Box sx={{ maxWidth: '900', display: 'flex', flexDirection: `${props.dir ? "row-reverse" : ""}`, m: '20px', gap: '40px', border: '2px black solid', justifyContent: 'space-between' }}>
            <Box sx={{ p: '5px', flexWrap: 'wrap' }}>
                <Box sx={{ width: '200px', height: '200px' }}>
                    <img
                        width='200'
                        height='200'
                        src={props.image_url}
                        alt={props.name} />
                </Box>
            </Box>
            <Box sx={{ maxWidth: '900', p: '10px', flexWrap: 'wrap' }}>
                <Typography variant='h3' align='left'>
                    {props.name}
                </Typography>
                <Typography variant='body1' align='left' mb='2'>
                    {props.description}
                </Typography>
                <Typography component={'div'} marginTop={2} align='left'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {props.traits.map((item, key) => {
                            return (
                                <Box key={`trait_${key}`} sx={{ p: '5px', border: 'solid 2px gray', px: '15px' }}>
                                    {item}
                                </Box>
                            )
                        })}
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}
export default Telebubbie;