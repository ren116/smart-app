import { useState, useEffect } from "react";
export default function NFTs() {
  const [nftListing, setNftListing] = useState([]);
  const [filteredNftListing, setFilteredNftListing] = useState([])
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
    <div
      className="nfts"
      style={{ display: "flex", justifyContent: "center", padding: "2%" }}
    >
      <div>
        <input onChange={handleSearch} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
        {nftListing &&
          nftListing.length > 0 &&
          nftListing.map((item, key) => (
            <div key={key} style={{ width: "20%", height: "15%" }}>
              <img width="100%" src={item.img} alt="as" />
              <p>Name:{item.onChainCollection.data.name}</p>
              <p> Price:{item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}