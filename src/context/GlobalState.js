// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer, useEffect } from "react";
import "./AppReducer";
import AppReducer from "./AppReducer";

const initialState = {
  mylist: [],
  completed: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addBookToMyList = (data) => {
    dispatch({ type: "ADD_BOOK_TO_MYLIST", payload: data });
  };

  return (
    <GlobalContext.Provider
      value={{
        mylist: state.mylist,
        completed: state.completed,
        addBookToMyList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
