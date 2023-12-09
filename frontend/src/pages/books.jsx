import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Books = () => {
    const [books, setBooks] =useState([]);
   

    useEffect(() => {

         const fetchAllBooks = async() =>{

             try{

                 const res = await axios.get("http://localhost:3000/books")
             }catch(err)
             {

                 console.log(err)
             }
         }
         fetchAllBooks();
    }, [])
              
       

  return (
    <div>books</div>
  )
}

export default Books