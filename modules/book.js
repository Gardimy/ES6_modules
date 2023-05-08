 class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (title, author) => {
    const book = { title, author, id: Date.now() };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  removeBook = (id) => {
    const index = this.books.findIndex((book) => book.id === Number(id));
    if (index !== -1) {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  };

  displayBooks = () => {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    this.books.forEach((book) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book');
      bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove-title" data-id="${book.id}">Remove</button>`;
      bookList.appendChild(bookItem);

      const removeButton = bookItem.querySelector('.remove-title');
      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        this.displayBooks();
      });
    });
  };
}

export default Books;
