import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooks } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addBooks(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-field">
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
