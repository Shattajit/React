import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact to={"/"} className="nav-link">
        Home
      </NavLink>

      <NavLink exact to={"/add-book"} className="nav-link">
        AddBook
      </NavLink>

      <NavLink exact to={"/show-books"} className="nav-link">
        ShowBooks
      </NavLink>
    </nav>
  );
}

export default Navbar;
