// eslint-disable-next-line no-unused-vars
// , getAllBooksHandler, getBookById, editBookById, deleteBookByIdHandler
// eslint-disable-next-line no-unused-vars
const { addBookHandler, getAllBooksHandler, getBookByIdHandler } = require('./handler');

const routes = [
  // add a book
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // get all book
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  // get book with spesifik id
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: () => {},
  },
];
module.exports = routes;
