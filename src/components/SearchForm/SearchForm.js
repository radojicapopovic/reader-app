import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../../context/GlobalContext";
import axios from "axios";

const URL = "http://openlibrary.org/search.json?title=";

const SearchForm = () => {
  const value = useContext(Context);
  const { dispatch } = value;

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = async (dispatch) => {
    if (searchTerm) {
      const response = await axios.get(`${URL}${searchTerm}`);
      console.log(response.data.docs);
      await dispatch({
        type: "SEARCH_BOOKS",
        payload: response.data.docs,
      });
    }
  };
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-beige">
              <input
                type="text"
                className="form-control bg-beige"
                placeholder="Books ..."
                value={searchTerm}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={() => handleClick(dispatch)}
              >
                <FaSearch className="search-icon" size={32} color="teal" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
