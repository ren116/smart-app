import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";
import Nfts from "pages/Nfts";
import NoPage from "pages/NoPage";
import Buildings from "pages/Buildings/Buildings";
import { Teletubbies } from "pages/Teletubbies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/teletubbies" element={<Teletubbies />} />
            <Route path="/NFTs" element={<Nfts />} />
            <Route path="/buildings" element={<Buildings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
