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

  // 4. QueryParams: GetByName
  // {
  //   method: 'GET',
  //   path: '/books/{name?}',
  //   handler: getByNameHandler,
  // },

  // 5. QueryParams: GetByReading
  // {
  //   method: 'GET',
  //   path: '/books/{reading?}',
  //   handler: () => {},
  // },

  // 6. QueryParams: GetByFinished
  // {
  //   method: 'GET',
  //   path: '/books/{finished?}',
  //   handler: () => {},
  // },

  // 7. EditById
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },

  // 8. deletedById
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];
module.exports = routes;
