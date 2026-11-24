// eslint-disable-next-line
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Search from "./Search";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
