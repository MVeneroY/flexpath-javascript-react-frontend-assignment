// eslint-disable-next-line
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Search from "./Search";
import PageNotFound from "./PageNotFound";

let initialData = [];

function App() {
  const [data, setData] = useState(initialData);

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="search"
            element={<Search data={data} setData={setData} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
