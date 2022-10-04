import AllBooks from "./modules/AllBooks.js"
import { DateTime } from "./modules/luxon.js";
import EventListeners from "./modules/EventListeners.js" 

document.addEventListener('DOMContentLoaded', () => {
    AllBooks.displayBooks();
    EventListeners();
  });

  
  const removeBook = (id) => {
    console.log("hhh", "jjj");
    const bookData = AllBooks.getBooks();
    const filteredBooks = bookData.filter((item) => item.id !== id);
  
    // eslint-disable-next-line no-use-before-define
    AllBooks.localStorage('books', filteredBooks);
  };
  
  window.removeBook = removeBook;

  const mydate = () => {
    const dt = DateTime.now();
    const thedate = dt.toLocaleString(DateTime.DATETIME_FULL);
    return thedate;
  };
  
  const dateptag = document.querySelector('#currentDate');
  
  dateptag.textContent = `${mydate()}`;