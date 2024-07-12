import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "../Layouts/Navbar";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/edit-book" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
