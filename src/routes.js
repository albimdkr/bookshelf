// eslint-disable-next-line no-unused-vars
// , getAllBooksHandler, getBookById, editBookById, deleteBookByIdHandler
// eslint-disable-next-line no-unused-vars
const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  // 1. add a book
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // 2. get all book
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  // 3. get book with spesifik id
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },

  // 4. EditById
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },

  // 5. deletedById
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];
module.exports = routes;
