import axios from "axios";

const weatherOptions = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "22.3, 114.1" },
  headers: {
    "X-RapidAPI-Key": "cf1d6bd258msh581225dc1a5493fp11399bjsn09a7b76afe60",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const getCurrentWeatherData = async () => {
  try {
    const response = await axios.request(weatherOptions);
    return response;
  } catch (error) {
    throw error;
  }
};

const buildingsOptions = {
  method: "GET",
  url: "/buildings.json",
};

export const getBuildingsData = async () => {
  try {
    const response = await axios.request(buildingsOptions);
    return response.data.buildings;
  } catch (error) {
    throw error;
  }
};

export const getData = () => {
  return new Promise((resolve, reject) => {
    fetch('teletubbies.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function (myJson) {
        resolve(myJson.json());
      });
  })
}

