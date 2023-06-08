import { useState, useEffect } from "react";
export default function NFTs() {
  const [nftListing, setNftListing] = useState([]);
  const [filteredNftListing, setFilteredNftListing] = useState([]);
  const [offset, setOffset] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const loadNftListing = async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=0`
    )
    const data = await response.json()
    setNftListing([...nftListing, ...data.results])
  }
  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }
  useEffect(() => {
    loadNftListing();
  }, []);
  useEffect(() => {
    setFilteredNftListing(
      nftListing.filter(nftListing =>
        nftListing.collectionName.toLowerCase().includes(searchTerm)
      )
    )
  }, [nftListing, searchTerm])
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
        sx={{ paddingBottom: 3 }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {filteredNftListing.map(nftListing => (
            <Grid key={nftListing.id} className="grid" item lg={3} md={4} sm={6} xs={12} >
              <CardActionArea>
                <CardMedia
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