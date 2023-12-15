import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {

   // State hook to manage the form data for the new book
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
     
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.name === 'price' ? parseFloat(e.target.value) : e.target.value;
    setBook(prev => ({...prev, [e.target.name]: value}));
  };

   // Function sa pag-click sa "ADD" button
  const handleClick = async (e) =>
  {

     e.preventDefault()
     try {
      // Async HTTP POST request gamit axios
        await axios.post("http://localhost:3001/books", book)
        navigate("/book")  // I-navigate ang user ngadto sa "/book" page human ma-successfully nga na-add ang book
     } catch (error) {
      console.log(error)
         //I-log ang error kung naay  problema sa pag-post
     }
  }

  console.log(book)
  return (
    <div className='form'>
    <h1> Add new Book </h1>
    <input type='text' placeholder='title' onChange={handleChange} name='title'/>
    <input type='text' placeholder='desc' onChange={handleChange}  name='desc'/>
    <input type='number' placeholder='price'onChange={handleChange} name='price'/>
    <input type='text' placeholder='cover'  onChange={handleChange} name='cover'/>
      
      <button  className="formButton" onClick={handleClick}> ADD </button>

    </div>
  )
}

export default Add