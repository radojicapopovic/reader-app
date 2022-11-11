import React, { useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

const URL = "https://openlibrary.org/trending/daily.json";

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_BOOKS":
      return {
        ...state,
        book_list: action.payload,
        heading: "Search Results",
      };
    default:
      return state;
  }
};

export const GlobalContext = (props) => {
  const [state, setState] = useState({
    book_list: [],
    heading: "Trending",
    dispatch: (action) => setState((state) => reducer(state, action)),
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${URL}`);
      const data = response.data.works;

      setState((state) => {
        return {
          ...state,
          book_list: data,
        };
      });
    };
    getData();
  }, []);
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};