import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  console.log(booksPerPage, totalBooks);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-number">
            <Link
              onClick={() => paginate(number)}
              to="/#"
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
