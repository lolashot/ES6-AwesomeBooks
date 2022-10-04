import getBooks from './getBooks.js';

export default class AllBooks {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static getBooks() {
    return getBooks();
  }

  static getBook() {
    const books = AllBooks.getBooks();
    const booksCount = books.length;
    const lastBook = booksCount - 1;
    const AddedBook = books[lastBook]?.id ? books[lastBook].id : 0;
    return AddedBook + 1;
  }

  static displayBooks() {
    const booksStore = document.querySelector('.books-list');
    const bookData = AllBooks.getBooks();
    if (bookData.length) {
      const listOfBooks = bookData
        .map(
          (book) => `<div id='book_id' class='book'>
          <div class='title-and-author'>
          <div class='book-title'>${book.title} by</div>
          <div class='book-author'>${book.author}</div>
          </div>
          <br />
          <div class='remove_book-btn__container'>
          <button onClick='removeBook(${book.id})' class='remove_book-btn'>Remove</button></div>
          </div><hr>`,
        )
        .join('');
      booksStore.innerHTML = listOfBooks;
    } else {
      booksStore.innerHTML = '<span class="text-center"><i> Please Add a Book</i></span>';
    }
  }

  static localStorage(a, b) {
    localStorage.setItem(a, JSON.stringify(b));
    AllBooks.displayBooks();
  }

  static addBook(bookItem) {
    const bookData = AllBooks.getBooks();
    bookData.push(bookItem);
    AllBooks.localStorage('books', bookData);
  }
}
