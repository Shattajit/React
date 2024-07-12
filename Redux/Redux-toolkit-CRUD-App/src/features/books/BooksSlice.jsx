import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "Sh",
      author: "abc",
    },
    {
      id: 2,
      title: "Sh1",
      author: "abcD",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => {
      state.books;
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id != action.payload);
      // state.books.forEach((book, index) => {
      //   book.id = index + 1;
      // });

      state.books = state.books.map((book, index) => {
        return {
          ...book,
          id: index + 1,
        };
      });
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;

      const index = state.books.findIndex((book) => book.id === id);

      if (index !== -1) {
        state.books[index] = {
          ...state.books[index],
          title: title,
          author: author,
        };
      }
    },
  },
});

export const { showBooks, addBooks, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
