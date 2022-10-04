import displayBooks from "./displayBooks";
import getBooks from "./getBooks";

const localStorage = (a, b) => {
  localStorage.setItem(a, JSON.stringify(b));
  displayBooks();
};

const addBook = (bookItem) => {
  const bookData = getBooks();
  bookData.push(bookItem);
  localStorage("books", bookData);
};

const removeBook = (id) => {
  const bookData = getBooks();
  const filteredBooks = bookData.filter((item) => item.id !== id);

  localStorage("books", filteredBooks);
};

export default performActionOnBook;
