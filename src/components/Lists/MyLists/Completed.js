import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import BookCard from "../../BookCard/BookCard";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Completed = () => {
  const { completed } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="book-page">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>
        <div className="header">
          <h1 className="heading">Complated Books</h1>
        </div>
        <div className="book-grid">
          {completed.map((book) => (
            <BookCard book={book} type="complated" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Completed;
