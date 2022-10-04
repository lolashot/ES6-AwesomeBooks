import getAllBooks from "./getBooks.js";

const displayBooks = () => {
    // console.log("1", "display1")
    const booksStore = document.querySelector('.books-list');
    const bookData = getAllBooks.getBooks();
    if (bookData.length) {
      const listOfBooks = bookData
        .map(
          (book) => `<div id="book_id" class="book">
        <div class="title-and-author">
        <div class="book-title">${book.title} by</div>
        <div class="book-author">${book.author}</div>
        </div>
        <br />
        <div class="remove_book-btn__container">
        <button onclick="AllBooks.removeBook(${book.id});" class="remove_book-btn">Remove</button>
        </div>
        </div><hr>`,
        )
        .join('');
      booksStore.innerHTML = listOfBooks;
    } else {
      booksStore.innerHTML = ' <span class="text-center"><i> Please Add a Book</i></span>';
    }
  }

  const displayBooksService = {
    displayBooks
  };

  export default displayBooksService;
