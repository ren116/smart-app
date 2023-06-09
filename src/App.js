import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";
import Teletubbies from "pages/Teletubbies";
import Buildings from "pages/Buildings";
import NFTs from "pages/NFTs";
import NoPage from "pages/NoPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/buildings" element={<Buildings />} />
            <Route path="/Teletubbies" element={<Teletubbies />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
