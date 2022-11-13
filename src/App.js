import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { GlobalContext } from "./context/GlobalContext";
import MyList from "./components/Lists/MyLists/MyList";
import Completed from "./components/Lists/MyLists/Completed";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <GlobalContext>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/mylist" exact element={<MyList />} />
            <Route path="/completed" exact element={<Completed />} />
            <Route path="/works/:id" exact element={<BookDetails />} />
          </Routes>
        </div>
      </GlobalContext>
    </GlobalProvider>
  );
};

export default App;
