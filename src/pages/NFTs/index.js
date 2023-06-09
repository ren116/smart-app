import React, { useState, useEffect } from 'react'
import { CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'
import { Container, Grid, TextField } from '@mui/material'
import { useCallback } from 'react'

export default function NFTs() {
  const [nftListing, setNftListing] = useState([])
  const [filteredNftListing, setFilteredNftListing] = useState([])
  const [offset, setOffset] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const loadNftListing = useCallback( async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    )
    const data = await response.json()
    setNftListing([...nftListing, ...data.results])
    setFilteredNftListing([...nftListing, ...data.results])
    setOffset(offset + 20)

  },[])

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  useEffect(() => {
    loadNftListing()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setFilteredNftListing(
      nftListing.filter(nftListing =>
        (String(nftListing.price).toLowerCase().includes(searchTerm) || nftListing.collectionName.toLowerCase().includes(searchTerm))
      )
    )
  }, [nftListing, searchTerm])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadNftListing()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)

    }

  }, [offset, loadNftListing])

  return (
    <Typography>
      <Typography gutterBottom variant="h3" component="div" sx={{ paddingTop: 5 }}>
        NFT Marketplace
      </Typography>
      <TextField
        placeholder="Search nft name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ paddingBottom: 3, width: "400px" }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {filteredNftListing.map(nftListing => (
            <Grid key={nftListing.id} className="grid" item lg={3} md={4} sm={6} xs={12} sx={{ my: '25px' }}>
              <CardActionArea sx={{ height: { sm: "100%", md: "230px" } }}>
                <CardMedia
                  sx={{ height: "100%" }}
                  component="img"
                  image={nftListing.img}
                  alt={nftListing.name}
                />
                <CardContent sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: "lightgreen" }}>
                  <Typography gutterBottom variant="p" component="h3">
                    {nftListing.collectionName}
                  </Typography>
                  <Typography variant="p" component="h3">
                    {nftListing.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Typography>
  );
}
