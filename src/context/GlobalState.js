import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  mylist: localStorage.getItem("mylist")
    ? JSON.parse(localStorage.getItem("mylist"))
    : [],
  completed: localStorage.getItem("complated")
    ? JSON.parse(localStorage.getItem("complated"))
    : [],
};
// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(state.mylist));
    localStorage.setItem("complated", JSON.stringify(state.completed));
  }, [state]);

  // Actions
  const addBookToMyList = (book) => {
    dispatch({ type: "ADD_BOOK_TO_MYLIST", payload: book });
  };

  const removeBookFromMyList = (id) => {
    dispatch({ type: "REMOVE_BOOK_FROM_MYLIST", payload: id });
  };

  const addBookToComplated = (book) => {
    dispatch({ type: "ADD_BOOK_TO_COMPLATED", payload: book });
  };

  return (
    <GlobalContext.Provider
      value={{
        mylist: state.mylist,
        completed: state.completed,
        addBookToMyList,
        removeBookFromMyList,
        addBookToComplated,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
