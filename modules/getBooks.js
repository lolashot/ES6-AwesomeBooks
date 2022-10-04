const getBooks = () => {
   if (JSON.parse(localStorage.getItem('books'))) 
   {
    return JSON.parse(localStorage.getItem('books'));
   }
    return [];

  };

const getAllBooks = {
  getBooks,
};

export default getBooks;
