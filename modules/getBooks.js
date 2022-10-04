const getBooks = () => 
   JSON.parse(localStorage.getItem('books'))
    ? JSON.parse(localStorage.getItem('books'))
    : [];
;

const getAllBooks = {
  getBooks,
};

export default getBooks;
