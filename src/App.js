import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";
import BuildingList from "pages/Buildings";
import Teletubbies from "pages/Teletubbies";
import NoPage from "pages/NoPage";
import Nfts from "pages/Nfts/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="buildings" element={<BuildingList />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/Teletubbies" element={<Teletubbies />}/>
          <Route path="/Nfts" element={<Nfts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
