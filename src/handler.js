/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
const books = require('./books');

// 1. addBook
const addBookHandler = (request, h) => {
  // eslint-disable-next-line max-len
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const bookId = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }
  const newBook = {
    bookId,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  books.push(newBook);

  const isSuccess = books.filter((book) => book.bookId === bookId).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId,
      },
    });
    response.code(201);
    return response;
  }
};

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  let searchBook = books;
  // eslint-disable-next-line default-case
  switch (true) {
    case name !== undefined:
      searchBook = searchBook.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
      break;
    case reading !== undefined:
      searchBook = searchBook.filter((book) => book.reading === !!Number(reading));
      break;
    case finished !== undefined:
      searchBook = searchBook.filter((book) => book.finished === !!Number(finished));
      break;
  }

  if (searchBook) {
    const { id } = books;
    const idParams = { bookId: id };
    const response = h.response({
      status: 'success',
      data: {
        books: searchBook.map((book) => ({
          id: idParams,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }).code(200);
    return response;
  }
};

// 3. getBookById
const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.find((b) => b.bookId === bookId);
  if (book !== undefined) {
    const { idParams, ...bookData } = book;
    const updatedBook = { id: bookId, ...bookData };
    const response = {
      status: 'success',
      data: {
        book: updatedBook,
      },
    };
    return h.response(response).code(200);
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
  return response;
};

// 4. editById
const editBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((b) => b.bookId === bookId);
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// 5. deleteBookById
const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((b) => b.bookId === bookId);
  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
