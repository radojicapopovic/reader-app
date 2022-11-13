import axios from "axios";
import React, { useEffect, useState } from "react";
// import { GlobalContext } from "../../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import coverImg from "../../images/cover_not_found.jpg";
import Loader from "../Loader/Loader";

const BookDetails = () => {
  // const { addBookToMyList } = useContext(GlobalContext);

  const URL = "https://openlibrary.org/works/";
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const getBookDetails = async () => {
      const response = await axios.get(`${URL}${id}.json`);
      const data = response.data;

      if (data) {
        const { description, title, covers, subject_places, subject_people } =
          data;
        const newBook = {
          description: description ? description.value : "No description found",
          title: title,
          cover_img: covers
            ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
            : coverImg,
          subject_places: subject_places
            ? subject_places.join(", ")
            : "No subject places found",
          subject_people: subject_people
            ? subject_people.slice(0, 3).join(", ")
            : "No subject people found",
        };

        setBookDetails(newBook);
      } else {
        setBookDetails(null);
      }
    };
    getBookDetails();
  }, [id]);

  let result;

  if (bookDetails === undefined || bookDetails.length === 0) {
    result = <Loader />;
  } else {
    
    result = (
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={bookDetails?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{bookDetails?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{bookDetails?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Places: </span>
              <span className="text-italic">{bookDetails?.subject_places}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject People: </span>
              <span className="text-italic">{bookDetails?.subject_people}</span>
            </div>
            {/* <div className="btn-add">
              <button>
                <span className="btn-text" onClick={(e) => addBookToMyList()} >Add to your list!</span>
              </button>
            </div>
            <div className="btn-add2">
              <button>
                <span className="btn-text2">Add to Read!</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  return <section className="book-details">{result}</section>;
};

export default BookDetails;
