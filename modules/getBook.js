import getAllBooks from "./getBooks";

const getBook = () => {
    const books = getAllBooks.getBooks();
    const booksCount = books.length;
    const lastBook = booksCount - 1;
    const AddedBook = books[lastBook]?.id
      ? books[lastBook].id
      : 0;
    return AddedBook + 1;
  }

  const getABook = {
    getBook
  };

  export default getABook;

