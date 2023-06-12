import axios from "axios";

const blogOptions = {
  method: "GET",
  url: `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&`,
};

export const getBlogData = async (offset=0,limit=20) => {
  try {
    const response = await axios.request(blogOptions);
    return response;
  } catch (error) {
    throw error;
  }
};
