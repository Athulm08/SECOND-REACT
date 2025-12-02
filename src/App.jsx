import { useState } from 'react'
import BookList from './components/booklist';
import books from './data/book';
import './App.css';


export default function App() {
return (
<div className="book-store">
<h1 className="book-store-title">Book Store</h1>
<BookList books={books} />
</div>
);
}


