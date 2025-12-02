import React from 'react';
import Book from './book';


export default function BookList({ books }) {
return (
<div className="book-list">
    {/*grid layout for book list with gap*/}
{books.map((book) => (
<Book key={book.id} book={book} />
))}
</div>
);
}