import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BooksSlice";
import { NavLink } from "react-router-dom";

function BooksView() {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="show-books">
      LIst of books
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <NavLink to={"/edit-book"} state={{ id, title, author }}>
                      <button>Edit</button>
                    </NavLink>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default BooksView;
