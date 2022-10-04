const getBooks = () => {
  if (JSON.parse(localStorage.getItem('books'))) {
    return JSON.parse(localStorage.getItem('books'));
  }
  return [];
};

export default getBooks;
