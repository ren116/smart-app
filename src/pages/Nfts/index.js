import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Nfts = () => {
  const [nfts, setNfts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch(
        `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${
          page * 20
        }`
      );
      const data = await response.json();
      console.log(data);

      setNfts((prevNfts) => [...prevNfts, ...data.results]);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );
  }, [loading]);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    const target = document.querySelector("#end-of-list");
    if (target) {
      observer.current.observe(target);
    }
  }, []);

  const filteredNfts = nfts.filter((nft) =>
    nft.collectionTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TextField
        label="Search NFTs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* <Grid container spacing={2}>
        {filteredNfts.map((nft, index) => (
          <Grid item key={nft.id} xs={2} sm={4} md={4} lg={4}>
            <img src={nft.img} width="100%" height="100%" alt=""/>
            <h3>{nft.collectionTitle}</h3>
            <p>{nft.price}</p>

            {index === filteredNfts.length - 1 && <div id="end-of-list" />}
          </Grid>
        ))}
      </Grid> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 16, xl: 20 }}
      >
        {filteredNfts.map((nft, index) => (
          <Grid item key={nft.id} xs={2} sm={4} md={4} lg={4} xl={5}>
            <img src={nft.img} width="100%" height="80%" alt=""/>
            <h4>{nft.collectionTitle}</h4>
            <p>{nft.price}</p>

            {index === filteredNfts.length - 1 && <div id="end-of-list" />}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Nfts;
