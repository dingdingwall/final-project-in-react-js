import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);



  const handleDelete = async (id) => {
    try {


      await axios.delete(`http://localhost:3001/books/${id}`)
      setBooks(books.filter(book => book.id !== id));
    } catch (err) {
      console.log(err);
    }
  }
  


  return (
    <div>
      <h1> Bookshop</h1>
      <div className='books'>
        {books.map((book) => (
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt='' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
             <hr/>
            <button className='delete' onClick={()=> handleDelete(book.id)}>Delete</button>
           

          </div>
          
        ))}
      </div>
      <button className='btnAdd'>
        <Link to="/add" style={ {textDecoration: 'none', color: 'inherit'} }>ADD NEW BOOK</Link>
      </button>
    </div>
  );
};

export default Books;
