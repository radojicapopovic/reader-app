import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import BookCard from "../../BookCard/BookCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate} from "react-router-dom";


const MyList = () => {
  const { mylist } = useContext(GlobalContext);
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
          <h1 className="heading">My BookList</h1>
        </div>
        <div className="book-grid">
            {mylist.map((book) => (
              <BookCard book={book} type="mylist" />
            ))}
          </div>
      </div>
    </div>
  );
};

export default MyList;
