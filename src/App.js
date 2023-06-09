import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buildings from "pages/Buildings";
import Layout from "pages/Layout";
import Home from "pages/Home";
import NoPage from "pages/NoPage";
import Nfts from "pages/Nfts";
import Teletubbies from "pages/Teletubbies";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/nfts" element={<Nfts />} />
            <Route path="/teletubbies" element={<Teletubbies />} />
            <Route path="/buildings" element={<Buildings />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;