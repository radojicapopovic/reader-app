import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { GlobalContext } from "./context/GlobalContext";
import Lists from "./components/Lists/Lists";

const App = () => {
  return (
    <GlobalContext>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/lists" exact element={<Lists />} />
          <Route path="/works/:id" exact element={<BookDetails />} />
        </Routes>
      </div>
    </GlobalContext>
  );
};

export default App;
