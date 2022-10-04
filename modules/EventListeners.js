const EventListeners = () => {
    document.getElementById('add-book-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const bookId = AllBooks.getBook();
    const bookObject = new AllBooks(
      bookId,
      document.getElementById('title').value,
      document.getElementById('author').value,
    );
    AllBooks.addBook(bookObject);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  });
  
  const navItems = document.getElementsByClassName('nav-item');
  for (let i = 0; i < navItems.length; i += 1) {
    navItems[i].addEventListener('click', function navElements() {
      const current = document.getElementsByClassName('active');
      current[0].className = current[0]?.className?.replace(' active', '');
      this.className += ' active';
    });
  }
  
  const listSelected = () => {
    document.getElementById('add-books').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
    document.getElementById('books-list').style.display = 'block';
  }
  
  const addBooksSelected = () => {
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('add-books').style.display = 'flex';
  }
  
  const contactSelected = () => {
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('add-books').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
  }
  
  const navList = document.querySelector('.list-nav');
  const navAdd = document.querySelector('.add-book-nav');
  const navContact = document.querySelector('.contact-nav');
  
  navList.addEventListener('click', listSelected);
  navAdd.addEventListener('click', addBooksSelected);
  navContact.addEventListener('click', contactSelected);
}

export default EventListeners;