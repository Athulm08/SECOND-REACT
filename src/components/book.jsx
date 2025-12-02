import React from 'react';


export default function Book({ book }) {
return (
<div className="book_card">
<img src={book.image} alt={book.title} className="object-cover " />
<h2 className="book-title">{book.title}</h2>
<p className="book-author">Author: {book.author}</p>
<p className="book-genre">Genre: {book.genre}</p>
</div>
);
}