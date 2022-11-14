import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import coverimg from "../../images/cover_not_found.jpg";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import "./BookCard.css";

const BookCard = ({ book, type }) => {
  const { removeBookFromMyList, addBookToComplated } = useContext(GlobalContext);
  const coverImage = book.book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.book.cover_i}-M.jpg`
    : coverimg;
  return (
    <div className="complate-one-item">
      <div className="book-card">
        <div className="overlay">
          <div className="book-item-img">
            <img src={coverImage} alt="cover" />
            <button className="ctrl-bttn" onClick={() => addBookToComplated(book)} >
              <AiOutlineEye />
            </button>
            <button
              className="ctrl-bttn"
              onClick={() => removeBookFromMyList(book.id)}
            >
              <AiOutlineDelete />
            </button>
          </div>
          <div className="book-item-info">
            <div className="book-item-info-item title fw-7 fs-18">
              <span>{book.book.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
