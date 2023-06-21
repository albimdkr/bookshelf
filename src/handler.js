/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  // eslint-disable-next-line max-len
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readingPage,
    finished,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
};

module.exports = { addBookHandler };
