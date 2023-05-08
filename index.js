import Books from './modules/book.js';
import {
  addBookForm, bookList, listButton, addBookButton, contactButton,
  listContainer, formSection, contactSection,
} from './modules/navigaton.js';
import { DateTime } from 'luxon';

const books = new Books();
books.displayBooks();

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.addBook(title, author);
  books.displayBooks();
  addBookForm.reset();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-title')) {
    const { id } = event.target.dataset;
    books.removeBook(id);
    books.displayBooks();
  }
});

listButton.addEventListener('click', () => {
  listContainer.classList.add('dBlock');
  listContainer.classList.remove('dNone');
  contactSection.classList.add('dNone');
  contactSection.classList.remove('dBlock');
  formSection.classList.add('dNone');
  formSection.classList.remove('dBlock');
});

addBookButton.addEventListener('click', () => {
  listContainer.classList.add('dNone');
  listContainer.classList.remove('dBlock');
  formSection.classList.add('dBlock');
  formSection.classList.remove('dNone');
  contactSection.classList.add('dNone');
  contactSection.classList.remove('dBlock');
});

contactButton.addEventListener('click', () => {
  contactSection.classList.add('dBlock');
  contactSection.classList.remove('dNone');
  formSection.classList.add('dNone');
  formSection.classList.remove('dBlock');
  listContainer.classList.add('dNone');
  listContainer.classList.remove('Block');
});

const currentDate = DateTime.local();
const currentDateElement = document.getElementById('current-date');
currentDateElement.innerHTML = formattedDate;