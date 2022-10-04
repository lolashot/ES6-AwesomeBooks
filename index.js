import AllBooks from './modules/AllBooks.js';

document.addEventListener('DOMContentLoaded', () => {
  AllBooks.displayBooks();
});

const removeBook = (id) => {
  const bookData = AllBooks.getBooks();
  const filteredBooks = bookData.filter((item) => item.id !== id);
  AllBooks.localStorage('books', filteredBooks);
};

window.removeBook = removeBook;

document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const bookId = AllBooks.getBook();
  const bookObject = new AllBooks(
    bookId,
    document.getElementById('submit').value,
    document.getElementById('submit').value
  );
  AllBooks.addBook(bookObject);
  document.getElementById('submit').value = '';
  document.getElementById('submit').value = '';
});

const navItems = document.getElementsByClassName('nav-item');
for (let i = 0; i < navItems.length; i += 1) {
  navItems[i].addEventListener('click', function navElements() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0]?.className?.replace('active', '');
    this.className += 'active';
  });
}

const listSelected = () => {
  document.getElementById('add-books').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById("books-list").style.display = "block";
};

const addBooksSelected = () => {
  document.getElementById('books-list').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('add-books').style.display = 'flex';
};

const contactSelected = () => {
  document.getElementById('books-list').style.display = 'none';
  document.getElementById('add-books').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
};

const navList = document.querySelector('.list-nav');
const navAdd = document.querySelector('.add-book-nav');
const navContact = document.querySelector('.contact-nav');

navList.addEventListener('click', listSelected);
navAdd.addEventListener('click', addBooksSelected);
navContact.addEventListener('click', contactSelected);

const time = document.querySelector('.time');
const date = document.querySelector('.date');

let formatTime = (date) => {
  const hour = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let state;

  if (date.getHours() < 12) {
    state = 'am';
  } else {
    state = 'pm';
  }

  return `${hour.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${state}`;
};

let formatDate = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let state;

  switch (day) {
    case 1:
      state = 'st';
      break;
    case 2:
      state = 'nd';
      break;
    default:
      state = 'th';
      break;
  }

  return `${months[month]} ${day}${state} ${year},`;
};

setInterval(() => {
  const today = new Date();

  time.textContent = formatTime(today);
  date.textContent = formatDate(today);
}, 1000);

const now = DateTime.now();
