import axios from "axios";

const nftsOptions = {
  method: "GET",
  url: "https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=150&offset=0"
};

export const getNftItemsData = async () => {
  try {
    const response = await axios.request(nftsOptions);
    return response;
  } catch (error) {
    throw error;
  }
};
