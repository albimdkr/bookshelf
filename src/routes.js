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
  // 1. addBook
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // 2. getAllBook
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  // 3. getBookById
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

  // 6. any
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];
module.exports = routes;
