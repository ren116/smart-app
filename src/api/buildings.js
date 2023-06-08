import axios from "axios";

export const GetData = async () => {
    try {
      const response = await axios.request('./buildings.json');
      return response;
    } catch (error) {
      throw error;
    }
};